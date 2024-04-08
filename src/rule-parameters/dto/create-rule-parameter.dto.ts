import {
  IsArray,
  IsDate,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { DeepPartial } from 'typeorm';

export class CreateRuleParameterDto {
  @IsInt()
  rule_id: number;

  @IsString()
  key: string;

  @IsString()
  format: string;

  @IsOptional()
  @IsString()
  input_validator: string;
}
