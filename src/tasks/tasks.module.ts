import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './entities/task.entity';
import { TasksRule } from './../tasks-rules/entities/tasks-rule.entity';
import { ClientsConfig } from './../clients-configs/entities/clients-config.entity';
import { TaskRuleParameter } from './../task-rule-parameters/entities/task-rule-parameter.entity';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [
    TypeOrmModule.forFeature([ Task, TasksRule, ClientsConfig, TaskRuleParameter ]),
  ],
  exports: [
    TasksService,
    TypeOrmModule,
  ]
})
export class TasksModule {}
