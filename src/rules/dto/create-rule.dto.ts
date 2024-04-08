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
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @IsOptional()
  version: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  function_name: string;

  @IsInt()
  @IsOptional()
  weight: number;

  @IsArray()
  @IsOptional()
  tasksrules?: DeepPartial<TasksRule>[];

  @IsArray()
  @IsOptional()
  rulesmodels?: DeepPartial<RulesModel>[];

  @IsArray()
  @IsOptional()
  rulesparameters?: DeepPartial<RuleParameter>[];

  @IsArray()
  @IsOptional()
  ruleoutputs?: DeepPartial<RuleOutput>[];
}
