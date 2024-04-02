import { Module } from '@nestjs/common';
import { RecognitionEventsService } from './recognition-events.service';
import { RecognitionEventsController } from './recognition-events.controller';

@Module({
  controllers: [RecognitionEventsController],
  providers: [RecognitionEventsService],
})
export class RecognitionEventsModule {}
