import { Injectable } from '@nestjs/common';
import { CreateRuleParameterDto } from './dto/create-rule-parameter.dto';
import { UpdateRuleParameterDto } from './dto/update-rule-parameter.dto';

@Injectable()
export class RuleParametersService {
  create(createRuleParameterDto: CreateRuleParameterDto) {
    return 'This action adds a new ruleParameter';
  }

  findAll() {
    return `This action returns all ruleParameters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ruleParameter`;
  }

  update(id: number, updateRuleParameterDto: UpdateRuleParameterDto) {
    return `This action updates a #${id} ruleParameter`;
  }

  remove(id: number) {
    return `This action removes a #${id} ruleParameter`;
  }
}
