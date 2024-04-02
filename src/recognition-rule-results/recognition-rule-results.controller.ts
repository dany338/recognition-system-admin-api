import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecognitionRuleResultsService } from './recognition-rule-results.service';
import { CreateRecognitionRuleResultDto } from './dto/create-recognition-rule-result.dto';
import { UpdateRecognitionRuleResultDto } from './dto/update-recognition-rule-result.dto';

@Controller('recognition-rule-results')
export class RecognitionRuleResultsController {
  constructor(private readonly recognitionRuleResultsService: RecognitionRuleResultsService) {}

  @Post()
  create(@Body() createRecognitionRuleResultDto: CreateRecognitionRuleResultDto) {
    return this.recognitionRuleResultsService.create(createRecognitionRuleResultDto);
  }

  @Get()
  findAll() {
    return this.recognitionRuleResultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recognitionRuleResultsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecognitionRuleResultDto: UpdateRecognitionRuleResultDto) {
    return this.recognitionRuleResultsService.update(+id, updateRecognitionRuleResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recognitionRuleResultsService.remove(+id);
  }
}
