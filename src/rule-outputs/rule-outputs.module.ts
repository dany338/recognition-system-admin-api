import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RuleOutputsService } from './rule-outputs.service';
import { RuleOutputsController } from './rule-outputs.controller';
import { RuleOutput } from './entities/rule-output.entity';
import { Rule } from './../rules/entities/rule.entity';

@Module({
  controllers: [RuleOutputsController],
  providers: [RuleOutputsService],
  imports: [
    TypeOrmModule.forFeature([ RuleOutput, Rule ]),
  ],
  exports: [
    RuleOutputsService,
    TypeOrmModule,
  ]
})
export class RuleOutputsModule {}
