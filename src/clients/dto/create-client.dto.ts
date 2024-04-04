import { IsDate, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsOptional()
  client_uid: string;

  @IsString()
  @MinLength(3)
  name: string;
}
