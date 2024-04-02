import { PartialType } from '@nestjs/mapped-types';
import { CreateLibraryObjectDto } from './create-library-object.dto';

export class UpdateLibraryObjectDto extends PartialType(CreateLibraryObjectDto) {}
