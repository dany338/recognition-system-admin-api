import { PartialType } from '@nestjs/mapped-types';
import { CreateRuleResponseDto } from './create-rule-response.dto';

export class UpdateRuleResponseDto extends PartialType(CreateRuleResponseDto) {}
