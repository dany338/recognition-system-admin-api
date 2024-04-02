import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecognitionImagesService } from './recognition-images.service';
import { CreateRecognitionImageDto } from './dto/create-recognition-image.dto';
import { UpdateRecognitionImageDto } from './dto/update-recognition-image.dto';

@Controller('recognition-images')
export class RecognitionImagesController {
  constructor(private readonly recognitionImagesService: RecognitionImagesService) {}

  @Post()
  create(@Body() createRecognitionImageDto: CreateRecognitionImageDto) {
    return this.recognitionImagesService.create(createRecognitionImageDto);
  }

  @Get()
  findAll() {
    return this.recognitionImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recognitionImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecognitionImageDto: UpdateRecognitionImageDto) {
    return this.recognitionImagesService.update(+id, updateRecognitionImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recognitionImagesService.remove(+id);
  }
}
