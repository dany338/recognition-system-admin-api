import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    required: true,
    type: Number,
    description: 'Client ID',
    default: 1,
  })
  @IsInt()
  client_id: number;

  @ApiProperty({
    required: false,
    type: Number,
    description: 'Client Metadata Schema ID',
  })
  @IsInt()
  @IsOptional()
  client_metadata_schema_id: number;

  @ApiProperty({
    required: true,
    type: String,
    description: 'Client Default Bucket Name',
  })
  @IsString()
  default_bucket: string;

  @ApiProperty()
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tasks?: DeepPartial<Task>[];
}
