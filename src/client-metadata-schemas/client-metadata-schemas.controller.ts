import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { ClientMetadataSchemasService } from './client-metadata-schemas.service';
import { CreateClientMetadataSchemaDto } from './dto/create-client-metadata-schema.dto';
import { UpdateClientMetadataSchemaDto } from './dto/update-client-metadata-schema.dto';
import { PaginationDto } from './../common/dtos/pagination.dto';

@Controller('client-metadata-schemas')
export class ClientMetadataSchemasController {
  constructor(
    private readonly clientMetadataSchemasService: ClientMetadataSchemasService,
  ) {}

  @Post()
  create(@Body() createClientMetadataSchemaDto: CreateClientMetadataSchemaDto) {
    return this.clientMetadataSchemasService.create(
      createClientMetadataSchemaDto,
    );
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.clientMetadataSchemasService.findAll(paginationDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.clientMetadataSchemasService.findOne(term);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClientMetadataSchemaDto: UpdateClientMetadataSchemaDto,
  ) {
    return this.clientMetadataSchemasService.update(
      id,
      updateClientMetadataSchemaDto,
    );
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clientMetadataSchemasService.remove(id);
  }
}
