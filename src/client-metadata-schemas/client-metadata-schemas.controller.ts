import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientMetadataSchemasService } from './client-metadata-schemas.service';
import { CreateClientMetadataSchemaDto } from './dto/create-client-metadata-schema.dto';
import { UpdateClientMetadataSchemaDto } from './dto/update-client-metadata-schema.dto';

@Controller('client-metadata-schemas')
export class ClientMetadataSchemasController {
  constructor(private readonly clientMetadataSchemasService: ClientMetadataSchemasService) {}

  @Post()
  create(@Body() createClientMetadataSchemaDto: CreateClientMetadataSchemaDto) {
    return this.clientMetadataSchemasService.create(createClientMetadataSchemaDto);
  }

  @Get()
  findAll() {
    return this.clientMetadataSchemasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientMetadataSchemasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientMetadataSchemaDto: UpdateClientMetadataSchemaDto) {
    return this.clientMetadataSchemasService.update(+id, updateClientMetadataSchemaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientMetadataSchemasService.remove(+id);
  }
}
