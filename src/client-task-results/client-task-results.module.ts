import { Module } from '@nestjs/common';
import { ClientTaskResultsService } from './client-task-results.service';
import { ClientTaskResultsController } from './client-task-results.controller';

@Module({
  controllers: [ClientTaskResultsController],
  providers: [ClientTaskResultsService],
})
export class ClientTaskResultsModule {}
