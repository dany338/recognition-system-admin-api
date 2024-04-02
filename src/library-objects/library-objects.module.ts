import { Module } from '@nestjs/common';
import { LibraryObjectsService } from './library-objects.service';
import { LibraryObjectsController } from './library-objects.controller';

@Module({
  controllers: [LibraryObjectsController],
  providers: [LibraryObjectsService],
})
export class LibraryObjectsModule {}
