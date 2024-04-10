// import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreateRuleParameterDto } from './create-rule-parameter.dto';

export class UpdateRuleParameterDto extends PartialType(CreateRuleParameterDto) {}
