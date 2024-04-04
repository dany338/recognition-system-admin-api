import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { ClientsConfigsService } from './clients-configs.service';
import { CreateClientsConfigDto } from './dto/create-clients-config.dto';
import { UpdateClientsConfigDto } from './dto/update-clients-config.dto';
import { PaginationDto } from './../common/dtos/pagination.dto';

@Controller('clients-configs')
export class ClientsConfigsController {
  constructor(private readonly clientsConfigsService: ClientsConfigsService) {}

  @Post()
  create(@Body() createClientsConfigDto: CreateClientsConfigDto) {
    return this.clientsConfigsService.create(createClientsConfigDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.clientsConfigsService.findAll(paginationDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.clientsConfigsService.findOne(term);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateClientsConfigDto: UpdateClientsConfigDto) {
    return this.clientsConfigsService.update(id, updateClientsConfigDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clientsConfigsService.remove(id);
  }
}
