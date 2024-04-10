// import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreateRuleOutputDto } from './create-rule-output.dto';

export class UpdateRuleOutputDto extends PartialType(CreateRuleOutputDto) {}
