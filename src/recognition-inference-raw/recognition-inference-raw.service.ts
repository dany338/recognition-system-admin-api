import { Injectable } from '@nestjs/common';
import { CreateRecognitionInferenceRawDto } from './dto/create-recognition-inference-raw.dto';
import { UpdateRecognitionInferenceRawDto } from './dto/update-recognition-inference-raw.dto';

@Injectable()
export class RecognitionInferenceRawService {
  create(createRecognitionInferenceRawDto: CreateRecognitionInferenceRawDto) {
    return 'This action adds a new recognitionInferenceRaw';
  }

  findAll() {
    return `This action returns all recognitionInferenceRaw`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recognitionInferenceRaw`;
  }

  update(id: number, updateRecognitionInferenceRawDto: UpdateRecognitionInferenceRawDto) {
    return `This action updates a #${id} recognitionInferenceRaw`;
  }

  remove(id: number) {
    return `This action removes a #${id} recognitionInferenceRaw`;
  }
}
