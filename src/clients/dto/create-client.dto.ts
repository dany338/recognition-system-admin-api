import { IsArray, IsDate, IsOptional, IsString, MinLength } from 'class-validator';
// import { SeedClientConfig } from './../../seed/data/seed-data';
import { DeepPartial } from 'typeorm';
import { ClientsConfig } from './../../clients-configs/entities/clients-config.entity';

export class CreateClientDto {
  @IsString()
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
