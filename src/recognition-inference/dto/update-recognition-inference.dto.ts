import { PartialType } from '@nestjs/mapped-types';
import { CreateRecognitionInferenceDto } from './create-recognition-inference.dto';

export class UpdateRecognitionInferenceDto extends PartialType(CreateRecognitionInferenceDto) {}
