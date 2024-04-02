import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecognitionStatesService } from './recognition-states.service';
import { CreateRecognitionStateDto } from './dto/create-recognition-state.dto';
import { UpdateRecognitionStateDto } from './dto/update-recognition-state.dto';

@Controller('recognition-states')
export class RecognitionStatesController {
  constructor(private readonly recognitionStatesService: RecognitionStatesService) {}

  @Post()
  create(@Body() createRecognitionStateDto: CreateRecognitionStateDto) {
    return this.recognitionStatesService.create(createRecognitionStateDto);
  }

  @Get()
  findAll() {
    return this.recognitionStatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recognitionStatesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecognitionStateDto: UpdateRecognitionStateDto) {
    return this.recognitionStatesService.update(+id, updateRecognitionStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recognitionStatesService.remove(+id);
  }
}
