import { Injectable } from '@nestjs/common';
import { CreateLibraryObjectAttributeDto } from './dto/create-library-object-attribute.dto';
import { UpdateLibraryObjectAttributeDto } from './dto/update-library-object-attribute.dto';

@Injectable()
export class LibraryObjectAttributesService {
  create(createLibraryObjectAttributeDto: CreateLibraryObjectAttributeDto) {
    return 'This action adds a new libraryObjectAttribute';
  }

  findAll() {
    return `This action returns all libraryObjectAttributes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} libraryObjectAttribute`;
  }

  update(id: number, updateLibraryObjectAttributeDto: UpdateLibraryObjectAttributeDto) {
    return `This action updates a #${id} libraryObjectAttribute`;
  }

  remove(id: number) {
    return `This action removes a #${id} libraryObjectAttribute`;
  }
}
