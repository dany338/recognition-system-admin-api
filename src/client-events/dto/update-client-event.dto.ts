import { PartialType } from '@nestjs/mapped-types';
import { CreateClientEventDto } from './create-client-event.dto';

export class UpdateClientEventDto extends PartialType(CreateClientEventDto) {}
