import { Injectable } from '@nestjs/common';
import { CreateRecognitionRuleResultDto } from './dto/create-recognition-rule-result.dto';
import { UpdateRecognitionRuleResultDto } from './dto/update-recognition-rule-result.dto';

@Injectable()
export class RecognitionRuleResultsService {
  create(createRecognitionRuleResultDto: CreateRecognitionRuleResultDto) {
    return 'This action adds a new recognitionRuleResult';
  }

  findAll() {
    return `This action returns all recognitionRuleResults`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recognitionRuleResult`;
  }

  update(id: number, updateRecognitionRuleResultDto: UpdateRecognitionRuleResultDto) {
    return `This action updates a #${id} recognitionRuleResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} recognitionRuleResult`;
  }
}
