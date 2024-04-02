import { Module } from '@nestjs/common';
import { ClientMetadataService } from './client-metadata.service';
import { ClientMetadataController } from './client-metadata.controller';

@Module({
  controllers: [ClientMetadataController],
  providers: [ClientMetadataService],
})
export class ClientMetadataModule {}
