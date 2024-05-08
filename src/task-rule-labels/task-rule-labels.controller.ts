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
import { TaskRuleLabelsService } from './task-rule-labels.service';
import { CreateTaskRuleLabelDto } from './dto/create-task-rule-label.dto';
import { UpdateTaskRuleLabelDto } from './dto/update-task-rule-label.dto';

@ApiTags('Task Rule Labels')
@Controller('task-rule-labels')
export class TaskRuleLabelsController {
  constructor(
    private readonly taskRuleLabelsService: TaskRuleLabelsService,
  ) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Task Rule Label created.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  create(@Body() createTaskRuleParameterDto: CreateTaskRuleLabelDto) {
    return this.taskRuleLabelsService.create(createTaskRuleParameterDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Task Rule Label found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findAll() {
    return this.taskRuleLabelsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Task Rule Label found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Task Rule Label not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findOne(@Param('id') id: string) {
    return this.taskRuleLabelsService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Task Rule Label updated.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Task Rule Label not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  update(
    @Param('id') id: string,
    @Body() updateTaskRuleLabelDto: UpdateTaskRuleLabelDto,
  ) {
    return this.taskRuleLabelsService.update(
      +id,
      updateTaskRuleLabelDto,
    );
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Task Rule Label deleted.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Task Rule Label not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  remove(@Param('id') id: string) {
    return this.taskRuleLabelsService.remove(+id);
  }
}
