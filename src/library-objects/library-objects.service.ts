import { Injectable } from '@nestjs/common';
import { CreateLibraryObjectDto } from './dto/create-library-object.dto';
import { UpdateLibraryObjectDto } from './dto/update-library-object.dto';

@Injectable()
export class LibraryObjectsService {
  create(createLibraryObjectDto: CreateLibraryObjectDto) {
    return 'This action adds a new libraryObject';
  }

  findAll() {
    return `This action returns all libraryObjects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} libraryObject`;
  }

  update(id: number, updateLibraryObjectDto: UpdateLibraryObjectDto) {
    return `This action updates a #${id} libraryObject`;
  }

  remove(id: number) {
    return `This action removes a #${id} libraryObject`;
  }
}
