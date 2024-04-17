import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ImportTaskDto } from './dto/import-task.dto';
import { PaginationDto } from './../common/dtos/pagination.dto';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Task created.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Post('/import')
  @ApiBody({ type: [ImportTaskDto] })
  @ApiResponse({ status: 201, description: 'Task imported.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  import(@Body() importTaskDto: ImportTaskDto[]) {
    return this.tasksService.import(importTaskDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Tasks found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.tasksService.findAll(paginationDto);
  }

  @Get('/clone/:id')
  @ApiResponse({ status: 200, description: 'Task cloned.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  clone(@Param('id', ParseIntPipe) id: number,) {
    return this.tasksService.clone(+id);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Task found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }


  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Task updated.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Task deleted.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
