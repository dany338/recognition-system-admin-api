import { Module } from '@nestjs/common';
import { ClientMetadataSchemasService } from './client-metadata-schemas.service';
import { ClientMetadataSchemasController } from './client-metadata-schemas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientMetadataSchema } from './entities/client-metadata-schema.entity';
import { ClientsConfig } from './../clients-configs/entities/clients-config.entity';

@Module({
  controllers: [ClientMetadataSchemasController],
  providers: [ClientMetadataSchemasService],
  imports: [
    TypeOrmModule.forFeature([ ClientMetadataSchema, ClientsConfig ]),
  ],
  exports: [
    ClientMetadataSchemasService,
    TypeOrmModule,
  ]
})
export class ClientMetadataSchemasModule {}
