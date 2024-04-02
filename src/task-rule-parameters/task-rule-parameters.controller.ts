import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskRuleParametersService } from './task-rule-parameters.service';
import { CreateTaskRuleParameterDto } from './dto/create-task-rule-parameter.dto';
import { UpdateTaskRuleParameterDto } from './dto/update-task-rule-parameter.dto';

@Controller('task-rule-parameters')
export class TaskRuleParametersController {
  constructor(private readonly taskRuleParametersService: TaskRuleParametersService) {}

  @Post()
  create(@Body() createTaskRuleParameterDto: CreateTaskRuleParameterDto) {
    return this.taskRuleParametersService.create(createTaskRuleParameterDto);
  }

  @Get()
  findAll() {
    return this.taskRuleParametersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskRuleParametersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskRuleParameterDto: UpdateTaskRuleParameterDto) {
    return this.taskRuleParametersService.update(+id, updateTaskRuleParameterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskRuleParametersService.remove(+id);
  }
}
