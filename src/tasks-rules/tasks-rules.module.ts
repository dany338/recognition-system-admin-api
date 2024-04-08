import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRulesService } from './tasks-rules.service';
import { TasksRulesController } from './tasks-rules.controller';
import { TasksRule } from './entities/tasks-rule.entity';
import { TaskRuleParameter } from './../task-rule-parameters/entities/task-rule-parameter.entity';
import { Rule } from './../rules/entities/rule.entity';

@Module({
  controllers: [TasksRulesController],
  providers: [TasksRulesService],
  imports: [
    TypeOrmModule.forFeature([ Rule, TasksRule, TaskRuleParameter ]),
  ],
  exports: [
    TasksRulesService,
    TypeOrmModule,
  ]
})
export class TasksRulesModule {}
