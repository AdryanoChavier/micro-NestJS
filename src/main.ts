import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './filter/http-expetion.filter';
import momentTimezone from 'moment-timezone';
import { Transport } from '@nestjs/microservices';


async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
    urls: ['amqp://admin:123456@10.136.62.142:5672/ecommercermq'],
    queue: 'ecommerce'
    },
    });
  app.useGlobalFilters(new AllExceptionsFilter());
  Date.prototype.toJSON = function(): any {
    return momentTimezone(this).tz('America/São_Paulo').format('YYYY-MM-DD HH:mm:ss.SSS')
    }
  await app.listen();
}
bootstrap();
