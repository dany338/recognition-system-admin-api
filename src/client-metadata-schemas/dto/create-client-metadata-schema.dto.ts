import { IsArray, IsBoolean, IsDate, IsInt, IsOptional, IsString, MinLength } from 'class-validator';
import { DeepPartial } from 'typeorm';
import { ClientsConfig } from './../../clients-configs/entities/clients-config.entity';

export class CreateClientMetadataSchemaDto {
  @IsString()
  normalized_key: string;

  @IsBoolean()
  required: boolean;

  @IsBoolean()
  validation: boolean;

  @IsInt()
  @IsOptional()
  validator_id: number;

  @IsString()
  type_value: string;

  @IsString()
  key: string;

  @IsString()
  label: string;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  clientConfigs?: DeepPartial<ClientsConfig>[];
}
