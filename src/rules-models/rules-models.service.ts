import { Injectable } from '@nestjs/common';
import { CreateRulesModelDto } from './dto/create-rules-model.dto';
import { UpdateRulesModelDto } from './dto/update-rules-model.dto';

@Injectable()
export class RulesModelsService {
  create(createRulesModelDto: CreateRulesModelDto) {
    return 'This action adds a new rulesModel';
  }

  findAll() {
    return `This action returns all rulesModels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rulesModel`;
  }

  update(id: number, updateRulesModelDto: UpdateRulesModelDto) {
    return `This action updates a #${id} rulesModel`;
  }

  remove(id: number) {
    return `This action removes a #${id} rulesModel`;
  }
}
