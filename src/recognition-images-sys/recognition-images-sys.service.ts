import { Injectable } from '@nestjs/common';
import { CreateRecognitionImagesSyDto } from './dto/create-recognition-images-sy.dto';
import { UpdateRecognitionImagesSyDto } from './dto/update-recognition-images-sy.dto';

@Injectable()
export class RecognitionImagesSysService {
  create(createRecognitionImagesSyDto: CreateRecognitionImagesSyDto) {
    return 'This action adds a new recognitionImagesSy';
  }

  findAll() {
    return `This action returns all recognitionImagesSys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recognitionImagesSy`;
  }

  update(id: number, updateRecognitionImagesSyDto: UpdateRecognitionImagesSyDto) {
    return `This action updates a #${id} recognitionImagesSy`;
  }

  remove(id: number) {
    return `This action removes a #${id} recognitionImagesSy`;
  }
}
