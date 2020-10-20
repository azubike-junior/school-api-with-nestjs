import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from  'dotenv';
import { Logger } from '@nestjs/common';

dotenv.config()

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 4040);
  Logger.log(console.log(`server running on port 4040`));
}
bootstrap();
