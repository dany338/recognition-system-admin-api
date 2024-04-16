import { Controller, Get, Res } from '@nestjs/common';

@Controller('health')
export class HealthController {
  constructor() {}

  @Get()
  checkHealth() {
    return 'OK';
  }
}
