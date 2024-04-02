import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientMetadataService } from './client-metadata.service';
import { CreateClientMetadatumDto } from './dto/create-client-metadatum.dto';
import { UpdateClientMetadatumDto } from './dto/update-client-metadatum.dto';

@Controller('client-metadata')
export class ClientMetadataController {
  constructor(private readonly clientMetadataService: ClientMetadataService) {}

  @Post()
  create(@Body() createClientMetadatumDto: CreateClientMetadatumDto) {
    return this.clientMetadataService.create(createClientMetadatumDto);
  }

  @Get()
  findAll() {
    return this.clientMetadataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientMetadataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientMetadatumDto: UpdateClientMetadatumDto) {
    return this.clientMetadataService.update(+id, updateClientMetadatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientMetadataService.remove(+id);
  }
}
