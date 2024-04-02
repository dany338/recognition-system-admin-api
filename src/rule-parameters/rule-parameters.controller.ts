import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RuleParametersService } from './rule-parameters.service';
import { CreateRuleParameterDto } from './dto/create-rule-parameter.dto';
import { UpdateRuleParameterDto } from './dto/update-rule-parameter.dto';

@Controller('rule-parameters')
export class RuleParametersController {
  constructor(private readonly ruleParametersService: RuleParametersService) {}

  @Post()
  create(@Body() createRuleParameterDto: CreateRuleParameterDto) {
    return this.ruleParametersService.create(createRuleParameterDto);
  }

  @Get()
  findAll() {
    return this.ruleParametersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ruleParametersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRuleParameterDto: UpdateRuleParameterDto) {
    return this.ruleParametersService.update(+id, updateRuleParameterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ruleParametersService.remove(+id);
  }
}
