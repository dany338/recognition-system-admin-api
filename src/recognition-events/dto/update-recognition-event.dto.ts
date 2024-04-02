import { PartialType } from '@nestjs/mapped-types';
import { CreateRecognitionEventDto } from './create-recognition-event.dto';

export class UpdateRecognitionEventDto extends PartialType(CreateRecognitionEventDto) {}
