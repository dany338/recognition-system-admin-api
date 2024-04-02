import { Module } from '@nestjs/common';
import { LibraryObjectAttributesService } from './library-object-attributes.service';
import { LibraryObjectAttributesController } from './library-object-attributes.controller';

@Module({
  controllers: [LibraryObjectAttributesController],
  providers: [LibraryObjectAttributesService],
})
export class LibraryObjectAttributesModule {}
