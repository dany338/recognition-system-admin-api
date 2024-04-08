import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RuleParametersService } from './rule-parameters.service';
import { RuleParametersController } from './rule-parameters.controller';
import { RuleParameter } from './entities/rule-parameter.entity';
import { Rule } from './../rules/entities/rule.entity';

@Module({
  controllers: [RuleParametersController],
  providers: [RuleParametersService],
  imports: [
    TypeOrmModule.forFeature([ RuleParameter, Rule ]),
  ],
  exports: [
    RuleParametersService,
    TypeOrmModule,
  ]
})
export class RuleParametersModule {}
