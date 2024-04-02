import { PartialType } from '@nestjs/mapped-types';
import { CreateRecognitionInferenceRawDto } from './create-recognition-inference-raw.dto';

export class UpdateRecognitionInferenceRawDto extends PartialType(CreateRecognitionInferenceRawDto) {}
