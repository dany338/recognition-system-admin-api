import { PartialType } from '@nestjs/mapped-types';
import { CreateRecognitionOutputDto } from './create-recognition-output.dto';

export class UpdateRecognitionOutputDto extends PartialType(CreateRecognitionOutputDto) {}
