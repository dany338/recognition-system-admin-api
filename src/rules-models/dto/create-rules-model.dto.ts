import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateRulesModelDto {
  @ApiProperty({
    required: true,
    type: Number,
    example: 1,
    description: 'Model ID',
  })
  @IsInt()
  model_id: number;

  @ApiProperty({
    required: true,
    type: Number,
    example: 1,
    description: 'Rule ID',
  })
  @IsInt()
  rule_id: number;
}
