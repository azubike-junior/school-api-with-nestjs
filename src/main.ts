import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  const server_host = process.env.DB_HOST || '0.0.0.0'
  const server_port =  process.env.PORT || 80;

  const app = await NestFactory.create(AppModule);
  await app.listen(server_port, server_host, () => {
    Logger.log(console.log(`server running on port 4040`))
  });
  ;
}
bootstrap();
