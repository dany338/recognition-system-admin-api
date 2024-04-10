import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { DeepPartial } from 'typeorm';
import { RuleOutput } from './../../rule-outputs/entities/rule-output.entity';
import { RuleParameter } from './../../rule-parameters/entities/rule-parameter.entity';
import { RulesModel } from './../../rules-models/entities/rules-model.entity';
import { TasksRule } from './../../tasks-rules/entities/tasks-rule.entity';

export class CreateRuleDto {
  @ApiProperty({
    required: false,
    type: String,
    description: 'Rule name',
    default: 'Rule Name',
  })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    required: false,
    type: String,
    description: 'Rule version',
    default: 'Rule Version',
  })
  @IsString()
  @IsOptional()
  version: string;

  @ApiProperty({
    required: false,
    type: String,
    description: 'Rule description',
    default: 'Rule Description',
  })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({
    required: false,
    type: String,
    description: 'Rule function name',
    default: 'Rule Function Name',
  })
  @IsString()
  function_name: string;

  @ApiProperty({
    required: false,
    type: Number,
    description: 'Rule weight',
    default: 1,
  })
  @IsInt()
  @IsOptional()
  weight: number;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  tasksrules?: DeepPartial<TasksRule>[];

  @ApiProperty()
  @IsArray()
  @IsOptional()
  rulesmodels?: DeepPartial<RulesModel>[];

  @ApiProperty()
  @IsArray()
  @IsOptional()
  rulesparameters?: DeepPartial<RuleParameter>[];

  @ApiProperty()
  @IsArray()
  @IsOptional()
  ruleoutputs?: DeepPartial<RuleOutput>[];
}
