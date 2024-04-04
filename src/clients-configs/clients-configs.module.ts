import { Module } from '@nestjs/common';
import { ClientsConfigsService } from './clients-configs.service';
import { ClientsConfigsController } from './clients-configs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsConfig } from './entities/clients-config.entity';
import { Task } from './../tasks/entities/task.entity';

@Module({
  controllers: [ClientsConfigsController],
  providers: [ClientsConfigsService],
  imports: [
    TypeOrmModule.forFeature([ ClientsConfig, Task ]),
  ],
  exports: [
    ClientsConfigsService,
    TypeOrmModule,
  ]
})
export class ClientsConfigsModule {}
