import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateClientsConfigDto } from './dto/create-clients-config.dto';
import { UpdateClientsConfigDto } from './dto/update-clients-config.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { v4 as uuid, validate as isUUID } from 'uuid';
import { ClientsConfig } from './entities/clients-config.entity';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { Task } from './../tasks/entities/task.entity';

@Injectable()
export class ClientsConfigsService {
  private readonly logger = new Logger('ClientsConfigsService');

  constructor(
    @InjectRepository(ClientsConfig)
    private readonly clientsConfigRepository: Repository<ClientsConfig>,
    @InjectRepository(ClientsConfig)
    private readonly taskRepository: Repository<Task>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createClientDto: CreateClientsConfigDto) {
    try {
      const { tasks = [], ...clientDetails } = createClientDto;
      const clientConfig = this.clientsConfigRepository.create({
        ...clientDetails,
        tasks: tasks.map((config) =>
          this.taskRepository.create(
            config as DeepPartial<Task>,
          ),
        ),
      });
      await this.clientsConfigRepository.save(clientConfig);
      return { ...clientConfig, tasks };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    const clientsConfigs = await this.clientsConfigRepository.find({
      take: limit,
      skip: offset,
      relations: {
        tasks: true,
      },
    });

    return clientsConfigs.map((clientsConfig) => ({
      ...clientsConfig,
      tasks: clientsConfig.tasks.map((task) => task.name),
    }));
  }

  async findOne(term: string) {
    let client: ClientsConfig;

    // if (isUUID(term)) {
    //   client = await this.clientsConfigRepository.findOneBy({ client_uid: term });
    // } else {
      const queryBuilder = this.clientsConfigRepository.createQueryBuilder('clieconf');
      client = await queryBuilder
        .where('client_config_id =:client_config_id or UPPER(default_bucket) =:nadefault_bucketme', {
          client_config_id: +term,
          default_bucket: term.toLowerCase(),
        })
        .leftJoinAndSelect('clieconf.tasks', 'clieconfTasks')
        .getOne();
    // }

    if (!client) throw new NotFoundException(`Client Config with ${term} not found`);

    return client;
  }

  async findOnePlain(term: string) {
    const { tasks = [], ...rest } = await this.findOne(term);
    return {
      ...rest,
      tasks: tasks.map((task) => task.run_type),
    };
  }

  async update(id: number, updateProductDto: UpdateClientsConfigDto) {
    const { tasks, ...toUpdate } = updateProductDto;

    const clientConfig = await this.clientsConfigRepository.preload({
      client_config_id: id,
      ...toUpdate,
    });

    if (!clientConfig) throw new NotFoundException(`ClientsConfig with id: ${id} not found`);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (tasks) {
        // await queryRunner.manager.delete(ClientsConfig, { client: { client_id: id } });

        clientConfig.tasks = tasks.map((task) =>
          this.taskRepository.create(task as DeepPartial<Task>),
        );
      }

      await queryRunner.manager.save(clientConfig);

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
    await this.clientsConfigRepository.remove(client);
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }

  async deleteAllClientsConfigs() {
    const query = this.clientsConfigRepository.createQueryBuilder('clientconfig');

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
