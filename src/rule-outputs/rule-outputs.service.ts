import { Injectable } from '@nestjs/common';
import { CreateRuleOutputDto } from './dto/create-rule-output.dto';
import { UpdateRuleOutputDto } from './dto/update-rule-output.dto';

@Injectable()
export class RuleOutputsService {
  create(createRuleOutputDto: CreateRuleOutputDto) {
    return 'This action adds a new ruleOutput';
  }

  findAll() {
    return `This action returns all ruleOutputs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ruleOutput`;
  }

  update(id: number, updateRuleOutputDto: UpdateRuleOutputDto) {
    return `This action updates a #${id} ruleOutput`;
  }

  remove(id: number) {
    return `This action removes a #${id} ruleOutput`;
  }
}
