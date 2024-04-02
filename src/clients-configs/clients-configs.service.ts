import { Injectable } from '@nestjs/common';
import { CreateClientsConfigDto } from './dto/create-clients-config.dto';
import { UpdateClientsConfigDto } from './dto/update-clients-config.dto';

@Injectable()
export class ClientsConfigsService {
  create(createClientsConfigDto: CreateClientsConfigDto) {
    return 'This action adds a new clientsConfig';
  }

  findAll() {
    return `This action returns all clientsConfigs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientsConfig`;
  }

  update(id: number, updateClientsConfigDto: UpdateClientsConfigDto) {
    return `This action updates a #${id} clientsConfig`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientsConfig`;
  }
}
