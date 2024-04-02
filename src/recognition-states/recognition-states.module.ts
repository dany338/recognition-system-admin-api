import { Module } from '@nestjs/common';
import { RecognitionStatesService } from './recognition-states.service';
import { RecognitionStatesController } from './recognition-states.controller';

@Module({
  controllers: [RecognitionStatesController],
  providers: [RecognitionStatesService],
})
export class RecognitionStatesModule {}
