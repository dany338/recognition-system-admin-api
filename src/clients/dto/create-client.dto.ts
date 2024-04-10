import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { DeepPartial } from 'typeorm';
import { ClientsConfig } from './../../clients-configs/entities/clients-config.entity';

export class CreateClientDto {
  @ApiProperty({
    required: false,
    type: String,
    description: 'Client UID',
    default: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  @IsOptional()
  client_uid: string;

  @ApiProperty({
    required: true,
    type: String,
    minLength: 3,
    description: 'Client Name - Unique',
    default: 'Ejemplo de Cliente - Daniel test 2',
  })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty()
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  configs?: DeepPartial<ClientsConfig>[]; // SeedClientConfig[];
}
