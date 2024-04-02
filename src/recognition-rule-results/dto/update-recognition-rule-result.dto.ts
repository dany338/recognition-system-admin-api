import { PartialType } from '@nestjs/mapped-types';
import { CreateRecognitionRuleResultDto } from './create-recognition-rule-result.dto';

export class UpdateRecognitionRuleResultDto extends PartialType(CreateRecognitionRuleResultDto) {}
