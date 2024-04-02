import { Module } from '@nestjs/common';
import { ObjectAttributesService } from './object-attributes.service';
import { ObjectAttributesController } from './object-attributes.controller';

@Module({
  controllers: [ObjectAttributesController],
  providers: [ObjectAttributesService],
})
export class ObjectAttributesModule {}
