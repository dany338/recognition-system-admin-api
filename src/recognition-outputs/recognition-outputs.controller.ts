import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecognitionOutputsService } from './recognition-outputs.service';
import { CreateRecognitionOutputDto } from './dto/create-recognition-output.dto';
import { UpdateRecognitionOutputDto } from './dto/update-recognition-output.dto';

@Controller('recognition-outputs')
export class RecognitionOutputsController {
  constructor(private readonly recognitionOutputsService: RecognitionOutputsService) {}

  @Post()
  create(@Body() createRecognitionOutputDto: CreateRecognitionOutputDto) {
    return this.recognitionOutputsService.create(createRecognitionOutputDto);
  }

  @Get()
  findAll() {
    return this.recognitionOutputsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recognitionOutputsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecognitionOutputDto: UpdateRecognitionOutputDto) {
    return this.recognitionOutputsService.update(+id, updateRecognitionOutputDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recognitionOutputsService.remove(+id);
  }
}
