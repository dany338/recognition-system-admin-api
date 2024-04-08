import {
  IsArray,
  IsDate,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { DeepPartial } from 'typeorm';
import { Task } from './../../tasks/entities/task.entity';

export class CreateClientsConfigDto {
  @IsInt()
  client_id: number;

  @IsInt()
  @IsOptional()
  client_metadata_schema_id: number;

  @IsString()
  default_bucket: string;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tasks?: DeepPartial<Task>[];
}
