import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RuleResponsesService } from './rule-responses.service';
import { CreateRuleResponseDto } from './dto/create-rule-response.dto';
import { UpdateRuleResponseDto } from './dto/update-rule-response.dto';

@Controller('rule-responses')
export class RuleResponsesController {
  constructor(private readonly ruleResponsesService: RuleResponsesService) {}

  @Post()
  create(@Body() createRuleResponseDto: CreateRuleResponseDto) {
    return this.ruleResponsesService.create(createRuleResponseDto);
  }

  @Get()
  findAll() {
    return this.ruleResponsesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ruleResponsesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRuleResponseDto: UpdateRuleResponseDto) {
    return this.ruleResponsesService.update(+id, updateRuleResponseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ruleResponsesService.remove(+id);
  }
}
