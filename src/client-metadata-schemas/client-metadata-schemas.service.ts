import { Injectable } from '@nestjs/common';
import { CreateClientMetadataSchemaDto } from './dto/create-client-metadata-schema.dto';
import { UpdateClientMetadataSchemaDto } from './dto/update-client-metadata-schema.dto';

@Injectable()
export class ClientMetadataSchemasService {
  create(createClientMetadataSchemaDto: CreateClientMetadataSchemaDto) {
    return 'This action adds a new clientMetadataSchema';
  }

  findAll() {
    return `This action returns all clientMetadataSchemas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientMetadataSchema`;
  }

  update(id: number, updateClientMetadataSchemaDto: UpdateClientMetadataSchemaDto) {
    return `This action updates a #${id} clientMetadataSchema`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientMetadataSchema`;
  }
}
