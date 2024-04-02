import { Injectable } from '@nestjs/common';
import { CreateClientMetadatumDto } from './dto/create-client-metadatum.dto';
import { UpdateClientMetadatumDto } from './dto/update-client-metadatum.dto';

@Injectable()
export class ClientMetadataService {
  create(createClientMetadatumDto: CreateClientMetadatumDto) {
    return 'This action adds a new clientMetadatum';
  }

  findAll() {
    return `This action returns all clientMetadata`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientMetadatum`;
  }

  update(id: number, updateClientMetadatumDto: UpdateClientMetadatumDto) {
    return `This action updates a #${id} clientMetadatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientMetadatum`;
  }
}
