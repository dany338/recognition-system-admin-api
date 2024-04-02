import { Module } from '@nestjs/common';
import { RecognitionImagesService } from './recognition-images.service';
import { RecognitionImagesController } from './recognition-images.controller';

@Module({
  controllers: [RecognitionImagesController],
  providers: [RecognitionImagesService],
})
export class RecognitionImagesModule {}
