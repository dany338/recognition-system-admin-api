// import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreateTasksRuleDto } from './create-tasks-rule.dto';

export class UpdateTasksRuleDto extends PartialType(CreateTasksRuleDto) {}
