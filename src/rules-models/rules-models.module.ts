import { Module } from '@nestjs/common';
import { RulesModelsService } from './rules-models.service';
import { RulesModelsController } from './rules-models.controller';

@Module({
  controllers: [RulesModelsController],
  providers: [RulesModelsService],
})
export class RulesModelsModule {}
