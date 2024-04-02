import { Injectable } from '@nestjs/common';
import { CreateObjectAttributeDto } from './dto/create-object-attribute.dto';
import { UpdateObjectAttributeDto } from './dto/update-object-attribute.dto';

@Injectable()
export class ObjectAttributesService {
  create(createObjectAttributeDto: CreateObjectAttributeDto) {
    return 'This action adds a new objectAttribute';
  }

  findAll() {
    return `This action returns all objectAttributes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} objectAttribute`;
  }

  update(id: number, updateObjectAttributeDto: UpdateObjectAttributeDto) {
    return `This action updates a #${id} objectAttribute`;
  }

  remove(id: number) {
    return `This action removes a #${id} objectAttribute`;
  }
}
