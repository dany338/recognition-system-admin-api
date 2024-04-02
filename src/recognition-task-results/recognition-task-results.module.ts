import { Module } from '@nestjs/common';
import { RecognitionTaskResultsService } from './recognition-task-results.service';
import { RecognitionTaskResultsController } from './recognition-task-results.controller';

@Module({
  controllers: [RecognitionTaskResultsController],
  providers: [RecognitionTaskResultsService],
})
export class RecognitionTaskResultsModule {}
