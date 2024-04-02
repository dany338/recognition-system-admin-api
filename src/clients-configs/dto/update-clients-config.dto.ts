import { PartialType } from '@nestjs/mapped-types';
import { CreateClientsConfigDto } from './create-clients-config.dto';

export class UpdateClientsConfigDto extends PartialType(CreateClientsConfigDto) {}
