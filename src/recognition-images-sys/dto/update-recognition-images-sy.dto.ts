import { PartialType } from '@nestjs/mapped-types';
import { CreateRecognitionImagesSyDto } from './create-recognition-images-sy.dto';

export class UpdateRecognitionImagesSyDto extends PartialType(CreateRecognitionImagesSyDto) {}
