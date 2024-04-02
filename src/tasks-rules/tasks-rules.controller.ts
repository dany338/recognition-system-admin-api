import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksRulesService } from './tasks-rules.service';
import { CreateTasksRuleDto } from './dto/create-tasks-rule.dto';
import { UpdateTasksRuleDto } from './dto/update-tasks-rule.dto';

@Controller('tasks-rules')
export class TasksRulesController {
  constructor(private readonly tasksRulesService: TasksRulesService) {}

  @Post()
  create(@Body() createTasksRuleDto: CreateTasksRuleDto) {
    return this.tasksRulesService.create(createTasksRuleDto);
  }

  @Get()
  findAll() {
    return this.tasksRulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksRulesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTasksRuleDto: UpdateTasksRuleDto) {
    return this.tasksRulesService.update(+id, updateTasksRuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksRulesService.remove(+id);
  }
}
