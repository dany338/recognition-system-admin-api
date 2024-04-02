import { PartialType } from '@nestjs/mapped-types';
import { CreateClientMetadatumDto } from './create-client-metadatum.dto';

export class UpdateClientMetadatumDto extends PartialType(CreateClientMetadatumDto) {}
