import { Injectable } from '@nestjs/common';
import { CreateTaskRuleParameterDto } from './dto/create-task-rule-parameter.dto';
import { UpdateTaskRuleParameterDto } from './dto/update-task-rule-parameter.dto';

@Injectable()
export class TaskRuleParametersService {
  create(createTaskRuleParameterDto: CreateTaskRuleParameterDto) {
    return 'This action adds a new taskRuleParameter';
  }

  findAll() {
    return `This action returns all taskRuleParameters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskRuleParameter`;
  }

  update(id: number, updateTaskRuleParameterDto: UpdateTaskRuleParameterDto) {
    return `This action updates a #${id} taskRuleParameter`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskRuleParameter`;
  }
}
