import { Module } from '@nestjs/common';
import { RecognitionOutputsService } from './recognition-outputs.service';
import { RecognitionOutputsController } from './recognition-outputs.controller';

@Module({
  controllers: [RecognitionOutputsController],
  providers: [RecognitionOutputsService],
})
export class RecognitionOutputsModule {}
