import { PartialType } from '@nestjs/mapped-types';
import { CreateLibraryObjectAttributeDto } from './create-library-object-attribute.dto';

export class UpdateLibraryObjectAttributeDto extends PartialType(CreateLibraryObjectAttributeDto) {}
