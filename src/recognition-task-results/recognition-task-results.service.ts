import { Injectable } from '@nestjs/common';
import { CreateRecognitionTaskResultDto } from './dto/create-recognition-task-result.dto';
import { UpdateRecognitionTaskResultDto } from './dto/update-recognition-task-result.dto';

@Injectable()
export class RecognitionTaskResultsService {
  create(createRecognitionTaskResultDto: CreateRecognitionTaskResultDto) {
    return 'This action adds a new recognitionTaskResult';
  }

  findAll() {
    return `This action returns all recognitionTaskResults`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recognitionTaskResult`;
  }

  update(id: number, updateRecognitionTaskResultDto: UpdateRecognitionTaskResultDto) {
    return `This action updates a #${id} recognitionTaskResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} recognitionTaskResult`;
  }
}
