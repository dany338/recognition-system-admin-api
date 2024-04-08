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
  @IsString()
  @MinLength(3)
  @IsOptional()
  description: string;

  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(3)
  version: string;

  @IsString()
  @IsOptional()
  server: string;

  @IsString()
  @IsOptional()
  server_path: string;

  @IsArray()
  @IsOptional()
  rulesmodels?: DeepPartial<RulesModel>[];
}
