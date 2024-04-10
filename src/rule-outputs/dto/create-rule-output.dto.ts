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

export class CreateRuleOutputDto {
  @ApiProperty({
    required: true,
    type: Number,
    description: 'Rule ID',
    default: 1,
  })
  @IsInt()
  rule_id: number;

  @ApiProperty({
    required: true,
    type: String,
    description: 'Rule Output Type',
    default: 'Type',
  })
  @IsString()
  type: string;

  @ApiProperty({
    required: true,
    type: String,
    description: 'Rule Output Key',
    default: 'Key',
  })
  @IsString()
  key: string;

  @ApiProperty({
    required: true,
    type: String,
    description: 'Rule Output Label',
    default: 'Label',
  })
  @IsString()
  label: string;
}
