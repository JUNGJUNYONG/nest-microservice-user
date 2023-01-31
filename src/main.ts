import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UserModule, {
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379,
    },
  });
  await app.listen();
}
bootstrap();
