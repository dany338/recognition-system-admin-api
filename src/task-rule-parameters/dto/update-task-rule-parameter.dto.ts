// import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreateTaskRuleParameterDto } from './create-task-rule-parameter.dto';

export class UpdateTaskRuleParameterDto extends PartialType(CreateTaskRuleParameterDto) {}
