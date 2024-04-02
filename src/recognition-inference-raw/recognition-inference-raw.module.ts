import { Module } from '@nestjs/common';
import { RecognitionInferenceRawService } from './recognition-inference-raw.service';
import { RecognitionInferenceRawController } from './recognition-inference-raw.controller';

@Module({
  controllers: [RecognitionInferenceRawController],
  providers: [RecognitionInferenceRawService],
})
export class RecognitionInferenceRawModule {}
