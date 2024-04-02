import { PartialType } from '@nestjs/mapped-types';
import { CreateClientMetadataSchemaDto } from './create-client-metadata-schema.dto';

export class UpdateClientMetadataSchemaDto extends PartialType(CreateClientMetadataSchemaDto) {}
