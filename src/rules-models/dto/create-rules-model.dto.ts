import {
  IsArray,
  IsDate,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { DeepPartial } from 'typeorm';

export class CreateRulesModelDto {
  @IsInt()
  model_id: number;

  @IsInt()
  rule_id: number;
}
