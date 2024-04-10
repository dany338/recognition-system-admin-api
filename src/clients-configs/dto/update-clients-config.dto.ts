// import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreateClientsConfigDto } from './create-clients-config.dto';

export class UpdateClientsConfigDto extends PartialType(CreateClientsConfigDto) {}
