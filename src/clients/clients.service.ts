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
import { Repository, Timestamp } from 'typeorm';
import { Client } from './entities/client.entity';
import { v4 as uuid, validate as isUUID } from 'uuid';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class ClientsService {
  private readonly logger = new Logger('ClientsService');

  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async create(createClientDto: CreateClientDto) {
    try {
      const newCreateClientDto = {
        ...createClientDto,
        client_uid: uuid(),
      };
      const client = this.clientRepository.create(newCreateClientDto);
      await this.clientRepository.save(client);
      return client;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    return this.clientRepository.find({
      take: limit,
      skip: offset,
      // TODO: relaciones
    });
  }

  async findOne(term: string) {
    let client: Client;

    if (isUUID(term)) {
      client = await this.clientRepository.findOneBy({ client_uid: term });
    } else {
      const queryBuilder = this.clientRepository.createQueryBuilder();
      client = await queryBuilder
        .where('client_id =:client_id or UPPER(name) =:name', {
          client_id: term,
          name: term.toLowerCase(),
        })
        .getOne();
    }

    if (!client) throw new NotFoundException(`Cliert with ${term} not found`);

    return client;
  }

  async update(id: number, updateProductDto: UpdateClientDto) {
    const client = await this.clientRepository.preload({
      client_id: id,
      ...updateProductDto,
    });

    if (!client) throw new NotFoundException(`Client with id: ${id} not found`);

    try {
      await this.clientRepository.save(client);
      return client;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    const client = await this.clientRepository.findOneBy({ client_id: id });
    await this.clientRepository.remove(client);
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    // console.log(error)
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
