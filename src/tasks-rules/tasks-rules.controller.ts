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
import { TasksRulesService } from './tasks-rules.service';
import { CreateTasksRuleDto } from './dto/create-tasks-rule.dto';
import { UpdateTasksRuleDto } from './dto/update-tasks-rule.dto';

@ApiTags('Tasks Rules')
@Controller('tasks-rules')
export class TasksRulesController {
  constructor(private readonly tasksRulesService: TasksRulesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Tasks Rule created.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  create(@Body() createTasksRuleDto: CreateTasksRuleDto) {
    return this.tasksRulesService.create(createTasksRuleDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Tasks Rules found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findAll() {
    return this.tasksRulesService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Tasks Rule found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Tasks Rule not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findOne(@Param('id') id: string) {
    return this.tasksRulesService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Tasks Rule updated.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Tasks Rule not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  update(
    @Param('id') id: string,
    @Body() updateTasksRuleDto: UpdateTasksRuleDto,
  ) {
    return this.tasksRulesService.update(+id, updateTasksRuleDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Tasks Rule deleted.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Tasks Rule not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  remove(@Param('id') id: string) {
    return this.tasksRulesService.remove(+id);
  }
}
