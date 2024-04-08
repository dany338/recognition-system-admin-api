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
  @IsUUID()
  @IsOptional()
  client_uid: string;

  @IsString()
  @MinLength(3)
  name: string;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  configs?: DeepPartial<ClientsConfig>[]; // SeedClientConfig[];
}
