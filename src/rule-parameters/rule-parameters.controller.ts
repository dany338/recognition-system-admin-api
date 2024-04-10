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
import { RuleParametersService } from './rule-parameters.service';
import { CreateRuleParameterDto } from './dto/create-rule-parameter.dto';
import { UpdateRuleParameterDto } from './dto/update-rule-parameter.dto';

@Controller('rule-parameters')
export class RuleParametersController {
  constructor(private readonly ruleParametersService: RuleParametersService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Rule Parameter created.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  create(@Body() createRuleParameterDto: CreateRuleParameterDto) {
    return this.ruleParametersService.create(createRuleParameterDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Rule Parameters found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findAll() {
    return this.ruleParametersService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Rule Parameter found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Rule Parameter not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findOne(@Param('id') id: string) {
    return this.ruleParametersService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Rule Parameter updated.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Rule Parameter not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  update(
    @Param('id') id: string,
    @Body() updateRuleParameterDto: UpdateRuleParameterDto,
  ) {
    return this.ruleParametersService.update(+id, updateRuleParameterDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Rule Parameter removed.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Rule Parameter not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  remove(@Param('id') id: string) {
    return this.ruleParametersService.remove(+id);
  }
}
