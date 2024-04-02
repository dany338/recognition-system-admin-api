import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecognitionInferenceService } from './recognition-inference.service';
import { CreateRecognitionInferenceDto } from './dto/create-recognition-inference.dto';
import { UpdateRecognitionInferenceDto } from './dto/update-recognition-inference.dto';

@Controller('recognition-inference')
export class RecognitionInferenceController {
  constructor(private readonly recognitionInferenceService: RecognitionInferenceService) {}

  @Post()
  create(@Body() createRecognitionInferenceDto: CreateRecognitionInferenceDto) {
    return this.recognitionInferenceService.create(createRecognitionInferenceDto);
  }

  @Get()
  findAll() {
    return this.recognitionInferenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recognitionInferenceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecognitionInferenceDto: UpdateRecognitionInferenceDto) {
    return this.recognitionInferenceService.update(+id, updateRecognitionInferenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recognitionInferenceService.remove(+id);
  }
}
