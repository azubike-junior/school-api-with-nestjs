import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { createConnection } from 'net';

const port = process.env.port || 4040;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log(console.log(`server running on port ${port}`));
}
bootstrap();
