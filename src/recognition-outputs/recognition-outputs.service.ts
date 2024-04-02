import { Injectable } from '@nestjs/common';
import { CreateRecognitionOutputDto } from './dto/create-recognition-output.dto';
import { UpdateRecognitionOutputDto } from './dto/update-recognition-output.dto';

@Injectable()
export class RecognitionOutputsService {
  create(createRecognitionOutputDto: CreateRecognitionOutputDto) {
    return 'This action adds a new recognitionOutput';
  }

  findAll() {
    return `This action returns all recognitionOutputs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recognitionOutput`;
  }

  update(id: number, updateRecognitionOutputDto: UpdateRecognitionOutputDto) {
    return `This action updates a #${id} recognitionOutput`;
  }

  remove(id: number) {
    return `This action removes a #${id} recognitionOutput`;
  }
}
