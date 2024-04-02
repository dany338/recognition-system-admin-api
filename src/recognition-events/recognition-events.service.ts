import { Injectable } from '@nestjs/common';
import { CreateRecognitionEventDto } from './dto/create-recognition-event.dto';
import { UpdateRecognitionEventDto } from './dto/update-recognition-event.dto';

@Injectable()
export class RecognitionEventsService {
  create(createRecognitionEventDto: CreateRecognitionEventDto) {
    return 'This action adds a new recognitionEvent';
  }

  findAll() {
    return `This action returns all recognitionEvents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recognitionEvent`;
  }

  update(id: number, updateRecognitionEventDto: UpdateRecognitionEventDto) {
    return `This action updates a #${id} recognitionEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} recognitionEvent`;
  }
}
