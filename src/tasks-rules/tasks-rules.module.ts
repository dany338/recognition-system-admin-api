import { Module } from '@nestjs/common';
import { TasksRulesService } from './tasks-rules.service';
import { TasksRulesController } from './tasks-rules.controller';

@Module({
  controllers: [TasksRulesController],
  providers: [TasksRulesService],
})
export class TasksRulesModule {}
