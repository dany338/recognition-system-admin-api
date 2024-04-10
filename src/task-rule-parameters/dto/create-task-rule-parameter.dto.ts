import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, MinLength } from "class-validator";

export class CreateTaskRuleParameterDto {
  @ApiProperty({
    required: true,
    type: Number,
    example: 1,
    description: 'Task Rule ID',
  })
  @IsInt()
  task_rule_id: number;

  @ApiProperty({
    required: true,
    type: String,
    example: 1,
    description: 'Rule Parameter ID',
  })
  @IsInt()
  rule_parameter_id: string;

  @ApiProperty({
    required: true,
    type: String,
    minLength: 3,
    description: 'Value',
  })
  @IsString()
  @MinLength(3)
  value: string;
}
