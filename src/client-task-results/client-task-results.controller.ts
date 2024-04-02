import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientTaskResultsService } from './client-task-results.service';
import { CreateClientTaskResultDto } from './dto/create-client-task-result.dto';
import { UpdateClientTaskResultDto } from './dto/update-client-task-result.dto';

@Controller('client-task-results')
export class ClientTaskResultsController {
  constructor(private readonly clientTaskResultsService: ClientTaskResultsService) {}

  @Post()
  create(@Body() createClientTaskResultDto: CreateClientTaskResultDto) {
    return this.clientTaskResultsService.create(createClientTaskResultDto);
  }

  @Get()
  findAll() {
    return this.clientTaskResultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientTaskResultsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientTaskResultDto: UpdateClientTaskResultDto) {
    return this.clientTaskResultsService.update(+id, updateClientTaskResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientTaskResultsService.remove(+id);
  }
}
