import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { ClientsConfig } from '../clients-configs/entities/clients-config.entity';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [
    TypeOrmModule.forFeature([ Client, ClientsConfig ]),
  ],
  exports: [
    ClientsService,
    TypeOrmModule,
  ]
})
export class ClientsModule {}
