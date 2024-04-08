import { Module } from '@nestjs/common';
import { ClientsConfigsService } from './clients-configs.service';
import { ClientsConfigsController } from './clients-configs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsConfig } from './entities/clients-config.entity';
import { Task } from './../tasks/entities/task.entity';
import { Client } from './../clients/entities/client.entity';
import { ClientMetadataSchema } from './../client-metadata-schemas/entities/client-metadata-schema.entity';

@Module({
  controllers: [ClientsConfigsController],
  providers: [ClientsConfigsService],
  imports: [
    TypeOrmModule.forFeature([ Client, ClientsConfig ]), // , Task,  ClientMetadataSchema
  ],
  exports: [
    ClientsConfigsService,
    TypeOrmModule,
  ]
})
export class ClientsConfigsModule {}
