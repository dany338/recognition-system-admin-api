import { IsArray, IsDate, IsInt, IsOptional, IsString, MinLength } from 'class-validator';
import { DeepPartial } from 'typeorm';
import { TasksRule } from './../../tasks-rules/entities/tasks-rule.entity';

export class CreateTaskDto {
  @IsString()
  @MinLength(3)
  task_key: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsInt()
  client_config_id: number;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  @IsOptional()
  required_score: number;

  @IsString()
  run_type: string;

  @IsArray()
  @IsOptional()
  tasksrules: DeepPartial<TasksRule>[];
}
