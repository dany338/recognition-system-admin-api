import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RulesModelsService } from './rules-models.service';
import { RulesModelsController } from './rules-models.controller';
import { Model } from './../models/entities/model.entity';
import { Rule } from './../rules/entities/rule.entity';

@Module({
  controllers: [RulesModelsController],
  providers: [RulesModelsService],
  imports: [
    TypeOrmModule.forFeature([ Model, Rule ]),
  ],
  exports: [
    RulesModelsService,
    TypeOrmModule,
  ]
})
export class RulesModelsModule {}
