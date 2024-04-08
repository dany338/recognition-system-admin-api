import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { v4 as uuid, validate as isUUID } from 'uuid';
import { Client } from './entities/client.entity';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { ClientsConfig } from '../clients-configs/entities/clients-config.entity';

@Injectable()
export class ClientsService {
  private readonly logger = new Logger('ClientsService');

  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(ClientsConfig)
    private readonly clientsConfigRepository: Repository<ClientsConfig>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createClientDto: CreateClientDto) {
    try {
      const { configs = [], ...clientDetails } = createClientDto;
      const client = this.clientRepository.create({
        ...clientDetails,
        client_uid: clientDetails?.client_uid ?? uuid(),
        configs: configs.map((config) =>
          this.clientsConfigRepository.create(
            config as DeepPartial<ClientsConfig>,
          ),
        ),
      });
      await this.clientRepository.save(client);
      return { ...client, configs };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    try {
      const { limit = 10, offset = 0 } = paginationDto;

      const clients = await this.clientRepository.find({
        take: limit,
        skip: offset,
        relations: {
          configs: {
            tasks: {
              tasksrules: {
                taskruleparameters: true,
                rule: true,
              },
            },
          },
        },
      }) ?? [];


      return clients.map((client) => ({
        ...client,
        configs: client.configs.map((config) => ({
          default_bucket: config.default_bucket,
          tasks: config.tasks.map((task) => ({
            name: task.name,
            tasksrules: task.tasksrules.map((rule) => ({
              task_rule_id: rule.task_rule_id,
              taskruleparameters: rule.taskruleparameters.map((parameter) => ({
                value: parameter.value,
              })),
              rule: rule.rule.name,
            }))
          }))
        }))
      }));
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findOne(term: string) {
    let client: Client;

    if (isUUID(term)) {
      client = await this.clientRepository.findOneBy({ client_uid: term });
    } else {
      const queryBuilder = this.clientRepository.createQueryBuilder('clie');
      client = await queryBuilder
        .where('client_id =:client_id or UPPER(name) =:name', {
          client_id: +term,
          name: term.toLowerCase(),
        })
        .leftJoinAndSelect('clie.configs', 'clieConfigs')
        .getOne();
    }

    if (!client) throw new NotFoundException(`Cliert with ${term} not found`);

    return client;
  }

  async findOnePlain(term: string) {
    const { configs = [], ...rest } = await this.findOne(term);
    return {
      ...rest,
      configs: configs.map((config) => config.default_bucket),
    };
  }

  async update(id: number, updateProductDto: UpdateClientDto) {
    const { configs, ...toUpdate } = updateProductDto;

    const client = await this.clientRepository.preload({
      client_id: id,
      ...toUpdate,
    });

    if (!client) throw new NotFoundException(`Client with id: ${id} not found`);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (configs) {
        // await queryRunner.manager.delete(ClientsConfig, { client: { client_id: id } });

        client.configs = configs.map((config) =>
          this.clientsConfigRepository.create(config as DeepPartial<ClientsConfig>),
        );
      }

      await queryRunner.manager.save(client);

      await queryRunner.commitTransaction();
      await queryRunner.release();

      return this.findOnePlain(`${id}`);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    const client = await this.findOne(`${id}`);
    await this.clientRepository.remove(client);
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }

  async deleteAllClients() {
    const query = this.clientRepository.createQueryBuilder('client');

    try {
      return await query
        .delete()
        .where({})
        .execute();

    } catch (error) {
      this.handleDBExceptions(error);
    }
  }
}
