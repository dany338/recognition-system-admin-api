import {
  IsArray,
  IsDate,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { DeepPartial } from 'typeorm';

export class CreateRuleOutputDto {
  @IsInt()
  rule_id: number;

  @IsString()
  type: string;

  @IsString()
  key: string;

  @IsString()
  label: string;
}
