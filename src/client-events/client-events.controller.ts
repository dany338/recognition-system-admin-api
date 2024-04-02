import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientEventsService } from './client-events.service';
import { CreateClientEventDto } from './dto/create-client-event.dto';
import { UpdateClientEventDto } from './dto/update-client-event.dto';

@Controller('client-events')
export class ClientEventsController {
  constructor(private readonly clientEventsService: ClientEventsService) {}

  @Post()
  create(@Body() createClientEventDto: CreateClientEventDto) {
    return this.clientEventsService.create(createClientEventDto);
  }

  @Get()
  findAll() {
    return this.clientEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientEventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientEventDto: UpdateClientEventDto) {
    return this.clientEventsService.update(+id, updateClientEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientEventsService.remove(+id);
  }
}
