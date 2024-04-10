import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RulesModelsService } from './rules-models.service';
import { CreateRulesModelDto } from './dto/create-rules-model.dto';
import { UpdateRulesModelDto } from './dto/update-rules-model.dto';

@ApiTags('Rules Models')
@Controller('rules-models')
export class RulesModelsController {
  constructor(private readonly rulesModelsService: RulesModelsService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Rules Model created.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  create(@Body() createRulesModelDto: CreateRulesModelDto) {
    return this.rulesModelsService.create(createRulesModelDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Rules Models found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findAll() {
    return this.rulesModelsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Rules Model found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Rules Model not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findOne(@Param('id') id: string) {
    return this.rulesModelsService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Rules Model updated.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Rules Model not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  update(
    @Param('id') id: string,
    @Body() updateRulesModelDto: UpdateRulesModelDto,
  ) {
    return this.rulesModelsService.update(+id, updateRulesModelDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Rules Model removed.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Rules Model not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  remove(@Param('id') id: string) {
    return this.rulesModelsService.remove(+id);
  }
}
