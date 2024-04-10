import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsInt, IsOptional, IsString, MinLength } from 'class-validator';
import { DeepPartial } from 'typeorm';
import { TasksRule } from './../../tasks-rules/entities/tasks-rule.entity';

export class CreateTaskDto {
  @ApiProperty({
    required: true,
    type: String,
    minLength: 3,
    description: 'Task Key - Unique',
  })
  @IsString()
  @MinLength(3)
  task_key: string;

  @ApiProperty({
    required: false,
    type: String,
    description: 'Task Name',
  })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    required: true,
    type: Number,
    description: 'Client Config ID',
  })
  @IsInt()
  client_config_id: number;

  @ApiProperty({
    required: false,
    type: String,
    description: 'Task Description',
  })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({
    required: false,
    type: Number,
    description: 'Task Required Score',
  })
  @IsInt()
  @IsOptional()
  required_score: number;

  @ApiProperty({
    required: true,
    type: String,
    description: 'Task Run Type'
  })
  @IsString()
  run_type: string;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  tasksrules: DeepPartial<TasksRule>[];
}
