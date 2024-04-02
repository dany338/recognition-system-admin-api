import { Module } from '@nestjs/common';
import { ClientMetadataSchemasService } from './client-metadata-schemas.service';
import { ClientMetadataSchemasController } from './client-metadata-schemas.controller';

@Module({
  controllers: [ClientMetadataSchemasController],
  providers: [ClientMetadataSchemasService],
})
export class ClientMetadataSchemasModule {}
