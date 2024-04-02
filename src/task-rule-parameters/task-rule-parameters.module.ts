import { Module } from '@nestjs/common';
import { TaskRuleParametersService } from './task-rule-parameters.service';
import { TaskRuleParametersController } from './task-rule-parameters.controller';

@Module({
  controllers: [TaskRuleParametersController],
  providers: [TaskRuleParametersService],
})
export class TaskRuleParametersModule {}
