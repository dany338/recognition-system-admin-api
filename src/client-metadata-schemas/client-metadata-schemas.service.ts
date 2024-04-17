import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateClientMetadataSchemaDto } from './dto/create-client-metadata-schema.dto';
import { UpdateClientMetadataSchemaDto } from './dto/update-client-metadata-schema.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { v4 as uuid, validate as isUUID } from 'uuid';
import { ClientMetadataSchema } from './entities/client-metadata-schema.entity';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { ClientsConfig } from '../clients-configs/entities/clients-config.entity';

@Injectable()
export class ClientMetadataSchemasService {
  private readonly logger = new Logger('ClientMetadataSchemasService');

  constructor(
    @InjectRepository(ClientMetadataSchema)
    private readonly clientMetadataSchemaRepository: Repository<ClientMetadataSchema>,
    @InjectRepository(ClientsConfig)
    private readonly clientsConfigRepository: Repository<ClientsConfig>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createClientDto: CreateClientMetadataSchemaDto) {
    try {
      const { clientConfigs = [], ...lientMetadataSchemaDetails } = createClientDto;
      const client = this.clientMetadataSchemaRepository.create({
        ...lientMetadataSchemaDetails,
        clientConfigs: clientConfigs.map((config) =>
          this.clientsConfigRepository.create(
            config as DeepPartial<ClientsConfig>,
          ),
        ),
      });
      await this.clientMetadataSchemaRepository.save(client);
      return { ...client, clientConfigs };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    const clients = await this.clientMetadataSchemaRepository.find({
      take: limit,
      skip: offset,
      relations: {
        clientConfigs: true,
      },
    });

    return clients.map((client) => ({
      ...client,
      configs: client.clientConfigs.map((config) => config.default_bucket),
    }));
  }

  async findOne(term: string) {
    let client: ClientMetadataSchema;

    if (isUUID(term)) {
      client = await this.clientMetadataSchemaRepository.findOneBy({ normalized_key: term });
    } else {
      const queryBuilder = this.clientMetadataSchemaRepository.createQueryBuilder('cliemetsch');
      client = await queryBuilder
        .where('client_metadata_schema_id =:client_metadata_schema_id or UPPER(label) =:label', {
          client_metadata_schema_id: +term,
          label: term.toLowerCase(),
        })
        .leftJoinAndSelect('cliemetsch.configs', 'clieConfigs')
        .getOne();
    }

    if (!client) throw new NotFoundException(`Cliert with ${term} not found`);

    return client;
  }

  async findOnePlain(term: string) {
    const { clientConfigs = [], ...rest } = await this.findOne(term);
    return {
      ...rest,
      configs: clientConfigs.map((config) => config.default_bucket),
    };
  }

  async update(id: number, updateProductDto: UpdateClientMetadataSchemaDto) {
    const { clientConfigs, ...toUpdate } = updateProductDto;

    const client = await this.clientMetadataSchemaRepository.preload({
      client_metadata_schema_id: id,
      ...toUpdate,
    });

    if (!client) throw new NotFoundException(`ClientMetadataSchema with id: ${id} not found`);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (clientConfigs) {
        // await queryRunner.manager.delete(ClientsConfig, { client: { client_id: id } });

        client.clientConfigs = clientConfigs.map((config) =>
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
    await this.clientMetadataSchemaRepository.remove(client);
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }

  async deleteAllClients() {
    const query = this.clientMetadataSchemaRepository.createQueryBuilder('client');

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
