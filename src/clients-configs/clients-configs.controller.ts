import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientsConfigsService } from './clients-configs.service';
import { CreateClientsConfigDto } from './dto/create-clients-config.dto';
import { UpdateClientsConfigDto } from './dto/update-clients-config.dto';
import { PaginationDto } from './../common/dtos/pagination.dto';

@ApiTags('Clients Configs')
@Controller('clients-configs')
export class ClientsConfigsController {
  constructor(private readonly clientsConfigsService: ClientsConfigsService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Client Config created.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  create(@Body() createClientsConfigDto: CreateClientsConfigDto) {
    return this.clientsConfigsService.create(createClientsConfigDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Clients Configs found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.clientsConfigsService.findAll(paginationDto);
  }

  @Get(':term')
  @ApiResponse({ status: 200, description: 'Client Config found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Client Config not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findOne(@Param('term') term: string) {
    return this.clientsConfigsService.findOne(term);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Client Config updated.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Client Config not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClientsConfigDto: UpdateClientsConfigDto,
  ) {
    return this.clientsConfigsService.update(id, updateClientsConfigDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Client Config removed.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Client Config not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clientsConfigsService.remove(id);
  }
}
