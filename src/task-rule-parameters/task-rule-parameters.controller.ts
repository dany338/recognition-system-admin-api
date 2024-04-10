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
import { TaskRuleParametersService } from './task-rule-parameters.service';
import { CreateTaskRuleParameterDto } from './dto/create-task-rule-parameter.dto';
import { UpdateTaskRuleParameterDto } from './dto/update-task-rule-parameter.dto';

@ApiTags('Task Rule Parameters')
@Controller('task-rule-parameters')
export class TaskRuleParametersController {
  constructor(
    private readonly taskRuleParametersService: TaskRuleParametersService,
  ) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Task Rule Parameter created.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  create(@Body() createTaskRuleParameterDto: CreateTaskRuleParameterDto) {
    return this.taskRuleParametersService.create(createTaskRuleParameterDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Task Rule Parameters found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findAll() {
    return this.taskRuleParametersService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Task Rule Parameter found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Task Rule Parameter not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findOne(@Param('id') id: string) {
    return this.taskRuleParametersService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Task Rule Parameter updated.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Task Rule Parameter not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  update(
    @Param('id') id: string,
    @Body() updateTaskRuleParameterDto: UpdateTaskRuleParameterDto,
  ) {
    return this.taskRuleParametersService.update(
      +id,
      updateTaskRuleParameterDto,
    );
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Task Rule Parameter deleted.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Task Rule Parameter not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  remove(@Param('id') id: string) {
    return this.taskRuleParametersService.remove(+id);
  }
}
