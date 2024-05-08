import { Module } from '@nestjs/common';
import { TaskRuleLabelsService } from './task-rule-labels.service';
import { TaskRuleLabelsController } from './task-rule-labels.controller';

@Module({
  controllers: [TaskRuleLabelsController],
  providers: [TaskRuleLabelsService],
})
export class TaskRuleLabelsModule {}
