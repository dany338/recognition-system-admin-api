import { Module } from '@nestjs/common';
import { RecognitionImagesSysService } from './recognition-images-sys.service';
import { RecognitionImagesSysController } from './recognition-images-sys.controller';

@Module({
  controllers: [RecognitionImagesSysController],
  providers: [RecognitionImagesSysService],
})
export class RecognitionImagesSysModule {}
