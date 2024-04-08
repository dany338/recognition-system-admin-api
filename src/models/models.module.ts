import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelsService } from './models.service';
import { ModelsController } from './models.controller';
import { Model } from './entities/model.entity';
import { RulesModel } from './../rules-models/entities/rules-model.entity';

@Module({
  controllers: [ModelsController],
  providers: [ModelsService],
  imports: [
    TypeOrmModule.forFeature([ Model, RulesModel ]),
  ],
  exports: [
    ModelsService,
    TypeOrmModule,
  ]
})
export class ModelsModule {}
