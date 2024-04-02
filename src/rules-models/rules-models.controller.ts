import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RulesModelsService } from './rules-models.service';
import { CreateRulesModelDto } from './dto/create-rules-model.dto';
import { UpdateRulesModelDto } from './dto/update-rules-model.dto';

@Controller('rules-models')
export class RulesModelsController {
  constructor(private readonly rulesModelsService: RulesModelsService) {}

  @Post()
  create(@Body() createRulesModelDto: CreateRulesModelDto) {
    return this.rulesModelsService.create(createRulesModelDto);
  }

  @Get()
  findAll() {
    return this.rulesModelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rulesModelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRulesModelDto: UpdateRulesModelDto) {
    return this.rulesModelsService.update(+id, updateRulesModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rulesModelsService.remove(+id);
  }
}
