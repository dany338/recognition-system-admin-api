// import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreateTaskRuleLabelDto } from './create-task-rule-label.dto';

export class UpdateTaskRuleLabelDto extends PartialType(CreateTaskRuleLabelDto) {}
