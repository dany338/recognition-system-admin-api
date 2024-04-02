import { Module } from '@nestjs/common';
import { RecognitionInferenceService } from './recognition-inference.service';
import { RecognitionInferenceController } from './recognition-inference.controller';

@Module({
  controllers: [RecognitionInferenceController],
  providers: [RecognitionInferenceService],
})
export class RecognitionInferenceModule {}
