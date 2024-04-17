import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger, RequestMethod } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { getSecrets } from '../envs';

// getSecrets()
//   .then(async (result) => {
//     console.log('result', result);

//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function bootstrap() {
  console.log('tun bootstap', process.env.PORT);
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  app.setGlobalPrefix('api', {
    exclude: [{ path: 'health', method: RequestMethod.GET }],
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Recognition System Admin API')
    .setDescription(
      'Recognition endpoints for the Recognition System Admin API',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 8000);
  logger.log(`App running on port ${8000}`);
}
bootstrap();
