import { PartialType } from '@nestjs/mapped-types';
import { CreateRecognitionImageDto } from './create-recognition-image.dto';

export class UpdateRecognitionImageDto extends PartialType(CreateRecognitionImageDto) {}
