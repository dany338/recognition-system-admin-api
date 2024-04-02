import { Injectable } from '@nestjs/common';
import { CreateClientTaskResultDto } from './dto/create-client-task-result.dto';
import { UpdateClientTaskResultDto } from './dto/update-client-task-result.dto';

@Injectable()
export class ClientTaskResultsService {
  create(createClientTaskResultDto: CreateClientTaskResultDto) {
    return 'This action adds a new clientTaskResult';
  }

  findAll() {
    return `This action returns all clientTaskResults`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientTaskResult`;
  }

  update(id: number, updateClientTaskResultDto: UpdateClientTaskResultDto) {
    return `This action updates a #${id} clientTaskResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientTaskResult`;
  }
}
