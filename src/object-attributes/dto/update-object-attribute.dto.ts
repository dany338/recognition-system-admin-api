import { PartialType } from '@nestjs/mapped-types';
import { CreateObjectAttributeDto } from './create-object-attribute.dto';

export class UpdateObjectAttributeDto extends PartialType(CreateObjectAttributeDto) {}
