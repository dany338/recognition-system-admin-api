import { Injectable } from '@nestjs/common';
import { CreateRecognitionStateDto } from './dto/create-recognition-state.dto';
import { UpdateRecognitionStateDto } from './dto/update-recognition-state.dto';

@Injectable()
export class RecognitionStatesService {
  create(createRecognitionStateDto: CreateRecognitionStateDto) {
    return 'This action adds a new recognitionState';
  }

  findAll() {
    return `This action returns all recognitionStates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recognitionState`;
  }

  update(id: number, updateRecognitionStateDto: UpdateRecognitionStateDto) {
    return `This action updates a #${id} recognitionState`;
  }

  remove(id: number) {
    return `This action removes a #${id} recognitionState`;
  }
}
