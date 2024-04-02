import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsConfigsService } from './clients-configs.service';
import { CreateClientsConfigDto } from './dto/create-clients-config.dto';
import { UpdateClientsConfigDto } from './dto/update-clients-config.dto';

@Controller('clients-configs')
export class ClientsConfigsController {
  constructor(private readonly clientsConfigsService: ClientsConfigsService) {}

  @Post()
  create(@Body() createClientsConfigDto: CreateClientsConfigDto) {
    return this.clientsConfigsService.create(createClientsConfigDto);
  }

  @Get()
  findAll() {
    return this.clientsConfigsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientsConfigsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientsConfigDto: UpdateClientsConfigDto) {
    return this.clientsConfigsService.update(+id, updateClientsConfigDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsConfigsService.remove(+id);
  }
}
