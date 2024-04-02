import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LibraryObjectsService } from './library-objects.service';
import { CreateLibraryObjectDto } from './dto/create-library-object.dto';
import { UpdateLibraryObjectDto } from './dto/update-library-object.dto';

@Controller('library-objects')
export class LibraryObjectsController {
  constructor(private readonly libraryObjectsService: LibraryObjectsService) {}

  @Post()
  create(@Body() createLibraryObjectDto: CreateLibraryObjectDto) {
    return this.libraryObjectsService.create(createLibraryObjectDto);
  }

  @Get()
  findAll() {
    return this.libraryObjectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.libraryObjectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLibraryObjectDto: UpdateLibraryObjectDto) {
    return this.libraryObjectsService.update(+id, updateLibraryObjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.libraryObjectsService.remove(+id);
  }
}
