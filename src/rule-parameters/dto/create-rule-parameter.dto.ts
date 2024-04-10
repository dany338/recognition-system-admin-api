import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateRuleParameterDto {
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
    minLength: 3,
    description: 'Key',
    default: 'key',
  })
  @IsString()
  key: string;

  @ApiProperty({
    required: true,
    type: String,
    description: 'Format',
    default: 'format',
  })
  @IsString()
  format: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  input_validator: string;
}
