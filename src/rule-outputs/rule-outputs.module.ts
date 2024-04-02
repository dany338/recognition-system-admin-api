import { Module } from '@nestjs/common';
import { RuleOutputsService } from './rule-outputs.service';
import { RuleOutputsController } from './rule-outputs.controller';

@Module({
  controllers: [RuleOutputsController],
  providers: [RuleOutputsService],
})
export class RuleOutputsModule {}
