import { Injectable } from '@nestjs/common';
import { CreateClientEventDto } from './dto/create-client-event.dto';
import { UpdateClientEventDto } from './dto/update-client-event.dto';

@Injectable()
export class ClientEventsService {
  create(createClientEventDto: CreateClientEventDto) {
    return 'This action adds a new clientEvent';
  }

  findAll() {
    return `This action returns all clientEvents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientEvent`;
  }

  update(id: number, updateClientEventDto: UpdateClientEventDto) {
    return `This action updates a #${id} clientEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientEvent`;
  }
}
