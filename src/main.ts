import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT, '0.0.0.0');
  Logger.log(console.log(`server running on port 4040`));
}
bootstrap();
