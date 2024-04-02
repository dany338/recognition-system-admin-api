import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecognitionEventsService } from './recognition-events.service';
import { CreateRecognitionEventDto } from './dto/create-recognition-event.dto';
import { UpdateRecognitionEventDto } from './dto/update-recognition-event.dto';

@Controller('recognition-events')
export class RecognitionEventsController {
  constructor(private readonly recognitionEventsService: RecognitionEventsService) {}

  @Post()
  create(@Body() createRecognitionEventDto: CreateRecognitionEventDto) {
    return this.recognitionEventsService.create(createRecognitionEventDto);
  }

  @Get()
  findAll() {
    return this.recognitionEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recognitionEventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecognitionEventDto: UpdateRecognitionEventDto) {
    return this.recognitionEventsService.update(+id, updateRecognitionEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recognitionEventsService.remove(+id);
  }
}
