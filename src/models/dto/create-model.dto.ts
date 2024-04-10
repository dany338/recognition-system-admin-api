import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { DeepPartial } from 'typeorm';
import { RulesModel } from './../../rules-models/entities/rules-model.entity';

export class CreateModelDto {
  @ApiProperty({
    required: false,
    type: String,
    description: 'Model Description',
    default: 'Model Description',
  })
  @IsString()
  @MinLength(3)
  @IsOptional()
  description: string;

  @ApiProperty({
    required: true,
    type: String,
    minLength: 3,
    description: 'Model Name',
    default: 'Model Name',
  })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    required: true,
    type: String,
    minLength: 3,
    description: 'Model Version',
    default: 'Model Version',
  })
  @IsString()
  @MinLength(3)
  version: string;

  @ApiProperty({
    required: false,
    type: String,
    description: 'Model Server',
    default: 'Model Server',
  })
  @IsString()
  @IsOptional()
  server: string;

  @ApiProperty({
    required: false,
    type: String,
    description: 'Model Server Path',
    default: 'Model Server Path',
  })
  @IsString()
  @IsOptional()
  server_path: string;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  rulesmodels?: DeepPartial<RulesModel>[];
}
