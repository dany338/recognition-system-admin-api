import { Injectable } from '@nestjs/common';
import { CreateTaskRuleLabelDto } from './dto/create-task-rule-label.dto';
import { UpdateTaskRuleLabelDto } from './dto/update-task-rule-label.dto';

@Injectable()
export class TaskRuleLabelsService {
  create(createTaskRuleLabelsDto: CreateTaskRuleLabelDto) {
    return 'This action adds a new taskRuleLabel';
  }

  findAll() {
    return `This action returns all taskRuleLabels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskRuleLabel`;
  }

  update(id: number, updateTaskRuleLabelDto: UpdateTaskRuleLabelDto) {
    return `This action updates a #${id} taskRuleLabel`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskRuleLabel`;
  }
}
