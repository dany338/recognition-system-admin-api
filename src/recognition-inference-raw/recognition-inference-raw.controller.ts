import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecognitionInferenceRawService } from './recognition-inference-raw.service';
import { CreateRecognitionInferenceRawDto } from './dto/create-recognition-inference-raw.dto';
import { UpdateRecognitionInferenceRawDto } from './dto/update-recognition-inference-raw.dto';

@Controller('recognition-inference-raw')
export class RecognitionInferenceRawController {
  constructor(private readonly recognitionInferenceRawService: RecognitionInferenceRawService) {}

  @Post()
  create(@Body() createRecognitionInferenceRawDto: CreateRecognitionInferenceRawDto) {
    return this.recognitionInferenceRawService.create(createRecognitionInferenceRawDto);
  }

  @Get()
  findAll() {
    return this.recognitionInferenceRawService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recognitionInferenceRawService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecognitionInferenceRawDto: UpdateRecognitionInferenceRawDto) {
    return this.recognitionInferenceRawService.update(+id, updateRecognitionInferenceRawDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recognitionInferenceRawService.remove(+id);
  }
}
