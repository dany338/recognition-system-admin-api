import { Injectable } from '@nestjs/common';
import { CreateTasksRuleDto } from './dto/create-tasks-rule.dto';
import { UpdateTasksRuleDto } from './dto/update-tasks-rule.dto';

@Injectable()
export class TasksRulesService {
  create(createTasksRuleDto: CreateTasksRuleDto) {
    return 'This action adds a new tasksRule';
  }

  findAll() {
    return `This action returns all tasksRules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tasksRule`;
  }

  update(id: number, updateTasksRuleDto: UpdateTasksRuleDto) {
    return `This action updates a #${id} tasksRule`;
  }

  remove(id: number) {
    return `This action removes a #${id} tasksRule`;
  }
}
