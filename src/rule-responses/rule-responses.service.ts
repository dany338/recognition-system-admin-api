import { Injectable } from '@nestjs/common';
import { CreateRuleResponseDto } from './dto/create-rule-response.dto';
import { UpdateRuleResponseDto } from './dto/update-rule-response.dto';

@Injectable()
export class RuleResponsesService {
  create(createRuleResponseDto: CreateRuleResponseDto) {
    return 'This action adds a new ruleResponse';
  }

  findAll() {
    return `This action returns all ruleResponses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ruleResponse`;
  }

  update(id: number, updateRuleResponseDto: UpdateRuleResponseDto) {
    return `This action updates a #${id} ruleResponse`;
  }

  remove(id: number) {
    return `This action removes a #${id} ruleResponse`;
  }
}
