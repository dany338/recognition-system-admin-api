import { Module } from '@nestjs/common';
import { ClientEventsService } from './client-events.service';
import { ClientEventsController } from './client-events.controller';

@Module({
  controllers: [ClientEventsController],
  providers: [ClientEventsService],
})
export class ClientEventsModule {}
