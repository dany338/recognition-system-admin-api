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
import { RuleOutputsService } from './rule-outputs.service';
import { CreateRuleOutputDto } from './dto/create-rule-output.dto';
import { UpdateRuleOutputDto } from './dto/update-rule-output.dto';

@ApiTags('Rule Outputs')
@Controller('rule-outputs')
export class RuleOutputsController {
  constructor(private readonly ruleOutputsService: RuleOutputsService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Rule Output created.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  create(@Body() createRuleOutputDto: CreateRuleOutputDto) {
    return this.ruleOutputsService.create(createRuleOutputDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Rule Outputs found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findAll() {
    return this.ruleOutputsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Rule Output found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Rule Output not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findOne(@Param('id') id: string) {
    return this.ruleOutputsService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Rule Output updated.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Rule Output not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  update(
    @Param('id') id: string,
    @Body() updateRuleOutputDto: UpdateRuleOutputDto,
  ) {
    return this.ruleOutputsService.update(+id, updateRuleOutputDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Rule Output removed.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Rule Output not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  remove(@Param('id') id: string) {
    return this.ruleOutputsService.remove(+id);
  }
}
