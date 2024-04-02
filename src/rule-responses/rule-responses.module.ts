import { Module } from '@nestjs/common';
import { RuleResponsesService } from './rule-responses.service';
import { RuleResponsesController } from './rule-responses.controller';

@Module({
  controllers: [RuleResponsesController],
  providers: [RuleResponsesService],
})
export class RuleResponsesModule {}
