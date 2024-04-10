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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientMetadataSchemasService } from './client-metadata-schemas.service';
import { CreateClientMetadataSchemaDto } from './dto/create-client-metadata-schema.dto';
import { UpdateClientMetadataSchemaDto } from './dto/update-client-metadata-schema.dto';
import { PaginationDto } from './../common/dtos/pagination.dto';

@ApiTags('Client Metadata Schemas')
@Controller('client-metadata-schemas')
export class ClientMetadataSchemasController {
  constructor(
    private readonly clientMetadataSchemasService: ClientMetadataSchemasService,
  ) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Client Metadata Schema created.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  create(@Body() createClientMetadataSchemaDto: CreateClientMetadataSchemaDto) {
    return this.clientMetadataSchemasService.create(
      createClientMetadataSchemaDto,
    );
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Client Metadata Schemas found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.clientMetadataSchemasService.findAll(paginationDto);
  }

  @Get(':term')
  @ApiResponse({ status: 200, description: 'Client Metadata Schema found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Client Metadata Schema not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findOne(@Param('term') term: string) {
    return this.clientMetadataSchemasService.findOne(term);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Client Metadata Schema updated.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Client Metadata Schema not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
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
  @ApiResponse({ status: 200, description: 'Client Metadata Schema deleted.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Client Metadata Schema not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clientMetadataSchemasService.remove(id);
  }
}
