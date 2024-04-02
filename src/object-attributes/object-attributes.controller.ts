import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObjectAttributesService } from './object-attributes.service';
import { CreateObjectAttributeDto } from './dto/create-object-attribute.dto';
import { UpdateObjectAttributeDto } from './dto/update-object-attribute.dto';

@Controller('object-attributes')
export class ObjectAttributesController {
  constructor(private readonly objectAttributesService: ObjectAttributesService) {}

  @Post()
  create(@Body() createObjectAttributeDto: CreateObjectAttributeDto) {
    return this.objectAttributesService.create(createObjectAttributeDto);
  }

  @Get()
  findAll() {
    return this.objectAttributesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objectAttributesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObjectAttributeDto: UpdateObjectAttributeDto) {
    return this.objectAttributesService.update(+id, updateObjectAttributeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.objectAttributesService.remove(+id);
  }
}
