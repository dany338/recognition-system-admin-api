import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LibraryObjectAttributesService } from './library-object-attributes.service';
import { CreateLibraryObjectAttributeDto } from './dto/create-library-object-attribute.dto';
import { UpdateLibraryObjectAttributeDto } from './dto/update-library-object-attribute.dto';

@Controller('library-object-attributes')
export class LibraryObjectAttributesController {
  constructor(private readonly libraryObjectAttributesService: LibraryObjectAttributesService) {}

  @Post()
  create(@Body() createLibraryObjectAttributeDto: CreateLibraryObjectAttributeDto) {
    return this.libraryObjectAttributesService.create(createLibraryObjectAttributeDto);
  }

  @Get()
  findAll() {
    return this.libraryObjectAttributesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.libraryObjectAttributesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLibraryObjectAttributeDto: UpdateLibraryObjectAttributeDto) {
    return this.libraryObjectAttributesService.update(+id, updateLibraryObjectAttributeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.libraryObjectAttributesService.remove(+id);
  }
}
