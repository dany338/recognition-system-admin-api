import { Injectable } from '@nestjs/common';
import { CreateRecognitionInferenceDto } from './dto/create-recognition-inference.dto';
import { UpdateRecognitionInferenceDto } from './dto/update-recognition-inference.dto';

@Injectable()
export class RecognitionInferenceService {
  create(createRecognitionInferenceDto: CreateRecognitionInferenceDto) {
    return 'This action adds a new recognitionInference';
  }

  findAll() {
    return `This action returns all recognitionInference`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recognitionInference`;
  }

  update(id: number, updateRecognitionInferenceDto: UpdateRecognitionInferenceDto) {
    return `This action updates a #${id} recognitionInference`;
  }

  remove(id: number) {
    return `This action removes a #${id} recognitionInference`;
  }
}
