import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RulesService } from './rules.service';
import { RulesController } from './rules.controller';
import { Rule } from './entities/rule.entity';
import { TasksRule } from './../tasks-rules/entities/tasks-rule.entity';
import { RulesModel } from './../rules-models/entities/rules-model.entity';
import { RuleParameter } from './../rule-parameters/entities/rule-parameter.entity';
import { RuleOutput } from './../rule-outputs/entities/rule-output.entity';

@Module({
  controllers: [RulesController],
  providers: [RulesService],
  imports: [
    TypeOrmModule.forFeature([ Rule, TasksRule, RulesModel, RuleParameter, RuleOutput ]),
  ],
  exports: [
    RulesService,
    TypeOrmModule,
  ]
})
export class RulesModule {}
