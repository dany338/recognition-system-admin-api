import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsIn, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    required: false,
    type: Number,
    description: 'Limit of items per page',
    default: 10,
  })
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // enableImplicitConversions: true
  limit?: number;

  @ApiProperty({
    required: false,
    type: Number,
    description: 'Offset of items per page',
    default: 0,
  })
  @IsOptional()
  @Min(0)
  @Type(() => Number) // enableImplicitConversions: true
  offset?: number;

  @ApiProperty({
    required: false,
    type: String,
    enum: ['ASC', 'DESC'],
    description: 'Order orientation (ASC or DESC)',
    default: 'ASC',
  })
  @IsOptional()
  @IsIn(['ASC', 'DESC'])
  @Type(() => String) // Esto convierte el valor a string si no lo es
  order?: 'ASC' | 'DESC' = 'ASC'; // Esto establece un valor por defecto si 'order' no se proporciona

  @ApiProperty({
    required: false,
    type: String,
    description: 'Order field',
    default: 0,
  })
  @IsOptional()
  @Type(() => String) // enableImplicitConversions: true
  orderField?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
    description: 'id record',
    default: 0,
  })
  @IsOptional()
  @Min(0)
  @Type(() => Number) // enableImplicitConversions: true
  id?: number | null;
}
