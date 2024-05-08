import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, MinLength } from "class-validator";

export class CreateTaskRuleLabelDto {
  @ApiProperty({
    required: true,
    type: String,
    example: 1,
    description: 'Task ID',
  })
  @IsInt()
  task_id: number;

  @ApiProperty({
    required: true,
    type: String,
    minLength: 3,
    description: 'Value',
  })
  @IsString()
  @MinLength(3)
  value: string;

  @ApiProperty({
    required: true,
    type: String,
    example: 1,
    description: 'Rule ID',
  })
  @IsInt()
  rule_id: number;
}
