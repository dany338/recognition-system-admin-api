import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecognitionTaskResultsService } from './recognition-task-results.service';
import { CreateRecognitionTaskResultDto } from './dto/create-recognition-task-result.dto';
import { UpdateRecognitionTaskResultDto } from './dto/update-recognition-task-result.dto';

@Controller('recognition-task-results')
export class RecognitionTaskResultsController {
  constructor(private readonly recognitionTaskResultsService: RecognitionTaskResultsService) {}

  @Post()
  create(@Body() createRecognitionTaskResultDto: CreateRecognitionTaskResultDto) {
    return this.recognitionTaskResultsService.create(createRecognitionTaskResultDto);
  }

  @Get()
  findAll() {
    return this.recognitionTaskResultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recognitionTaskResultsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecognitionTaskResultDto: UpdateRecognitionTaskResultDto) {
    return this.recognitionTaskResultsService.update(+id, updateRecognitionTaskResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recognitionTaskResultsService.remove(+id);
  }
}
