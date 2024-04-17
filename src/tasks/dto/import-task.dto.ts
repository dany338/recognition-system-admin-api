import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsDate, IsDateString, IsInt, IsOptional, IsString, IsUUID, MinLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { DeepPartial } from 'typeorm';
import { TasksRule } from '../../tasks-rules/entities/tasks-rule.entity';

class ClientDto {
  @ApiProperty()
  @IsInt()
  client_id: number;

  @ApiProperty()
  @IsUUID()
  client_uid: string;

  @ApiProperty()
  @IsString()
  name: string;
}

class ClientMetadataSchemaDto {
  @ApiProperty()
  @IsInt()
  client_metadata_schema_id: number;

  @ApiProperty()
  @IsString()
  normalized_key: string;

  @ApiProperty()
  @IsBoolean()
  required: boolean;

  @ApiProperty()
  @IsBoolean()
  validation: boolean;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  validator_id?: number;

  @ApiProperty()
  @IsString()
  type_value: string;

  @ApiProperty()
  @IsString()
  key: string;

  @ApiProperty()
  @IsString()
  label: string;
}

class ClientConfigDto {
  @ApiProperty()
  @IsString()
  default_bucket: string;

  @ApiProperty()
  @ValidateNested()
  @Type(() => ClientDto)
  client: ClientDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => ClientMetadataSchemaDto)
  clientMetadataSchema: ClientMetadataSchemaDto;
}

class TaskRuleParameterDto {
  @ApiProperty()
  @IsInt()
  task_rule_parameter_id: number;

  @ApiProperty()
  @IsString()
  value: string;

  @ApiProperty()
  @IsInt()
  rule_parameter_id: number;
}

class RuleDto {
  @ApiProperty()
  @IsInt()
  rule_id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  version: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  function_name: string;

  @ApiProperty()
  @IsInt()
  weight: number;
}

class TaskRuleDto {
  @ApiProperty()
  @IsInt()
  task_rule_id: number;

  @ApiProperty({ type: [TaskRuleParameterDto] })
  @ValidateNested({ each: true })
  @Type(() => TaskRuleParameterDto)
  @IsOptional()
  taskruleparameters?: TaskRuleParameterDto[];

  @ApiProperty()
  @ValidateNested()
  @Type(() => RuleDto)
  rule: RuleDto;
}

export class ImportTaskDto {
  @ApiProperty()
  @IsInt()
  task_id: number;

  @ApiProperty()
  @IsString()
  task_key: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty()
  @IsInt()
  client_config_id: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  required_score?: number;

  @ApiProperty()
  @IsString()
  run_type: string;

  @ApiProperty()
  @IsDateString()
  created_at: string;

  @ApiProperty()
  @IsDateString()
  updated_at: string;

  @ApiProperty()
  @ValidateNested()
  @Type(() => ClientConfigDto)
  client_config: ClientConfigDto;

  @ApiProperty({ type: [TaskRuleDto] })
  @ValidateNested({ each: true })
  @Type(() => TaskRuleDto)
  tasksrules: TaskRuleDto[];
}
