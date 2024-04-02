import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecognitionImagesSysService } from './recognition-images-sys.service';
import { CreateRecognitionImagesSyDto } from './dto/create-recognition-images-sy.dto';
import { UpdateRecognitionImagesSyDto } from './dto/update-recognition-images-sy.dto';

@Controller('recognition-images-sys')
export class RecognitionImagesSysController {
  constructor(private readonly recognitionImagesSysService: RecognitionImagesSysService) {}

  @Post()
  create(@Body() createRecognitionImagesSyDto: CreateRecognitionImagesSyDto) {
    return this.recognitionImagesSysService.create(createRecognitionImagesSyDto);
  }

  @Get()
  findAll() {
    return this.recognitionImagesSysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recognitionImagesSysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecognitionImagesSyDto: UpdateRecognitionImagesSyDto) {
    return this.recognitionImagesSysService.update(+id, updateRecognitionImagesSyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recognitionImagesSysService.remove(+id);
  }
}
