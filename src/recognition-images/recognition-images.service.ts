import { Injectable } from '@nestjs/common';
import { CreateRecognitionImageDto } from './dto/create-recognition-image.dto';
import { UpdateRecognitionImageDto } from './dto/update-recognition-image.dto';

@Injectable()
export class RecognitionImagesService {
  create(createRecognitionImageDto: CreateRecognitionImageDto) {
    return 'This action adds a new recognitionImage';
  }

  findAll() {
    return `This action returns all recognitionImages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recognitionImage`;
  }

  update(id: number, updateRecognitionImageDto: UpdateRecognitionImageDto) {
    return `This action updates a #${id} recognitionImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} recognitionImage`;
  }
}
