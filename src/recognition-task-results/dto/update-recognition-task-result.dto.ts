import { PartialType } from '@nestjs/mapped-types';
import { CreateRecognitionTaskResultDto } from './create-recognition-task-result.dto';

export class UpdateRecognitionTaskResultDto extends PartialType(CreateRecognitionTaskResultDto) {}
