import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RuleOutputsService } from './rule-outputs.service';
import { CreateRuleOutputDto } from './dto/create-rule-output.dto';
import { UpdateRuleOutputDto } from './dto/update-rule-output.dto';

@Controller('rule-outputs')
export class RuleOutputsController {
  constructor(private readonly ruleOutputsService: RuleOutputsService) {}

  @Post()
  create(@Body() createRuleOutputDto: CreateRuleOutputDto) {
    return this.ruleOutputsService.create(createRuleOutputDto);
  }

  @Get()
  findAll() {
    return this.ruleOutputsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ruleOutputsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRuleOutputDto: UpdateRuleOutputDto) {
    return this.ruleOutputsService.update(+id, updateRuleOutputDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ruleOutputsService.remove(+id);
  }
}
