import { PartialType } from '@nestjs/mapped-types';
import { CreateRecognitionStateDto } from './create-recognition-state.dto';

export class UpdateRecognitionStateDto extends PartialType(CreateRecognitionStateDto) {}
