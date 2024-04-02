import { Module } from '@nestjs/common';
import { RecognitionRuleResultsService } from './recognition-rule-results.service';
import { RecognitionRuleResultsController } from './recognition-rule-results.controller';

@Module({
  controllers: [RecognitionRuleResultsController],
  providers: [RecognitionRuleResultsService],
})
export class RecognitionRuleResultsModule {}
