import { Module } from '@nestjs/common';
import { ClientsConfigsService } from './clients-configs.service';
import { ClientsConfigsController } from './clients-configs.controller';

@Module({
  controllers: [ClientsConfigsController],
  providers: [ClientsConfigsService],
})
export class ClientsConfigsModule {}
