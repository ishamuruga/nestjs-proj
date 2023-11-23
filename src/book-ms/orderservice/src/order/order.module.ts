import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";


@Module({
    imports: [
      ClientsModule.register([
        {
          name: 'ORDER_MICROSERVICE',
          transport: Transport.KAFKA,
          options: {
            client: {
              clientId: 'payment',
              brokers: ['localhost:9092'],
            },
            consumer: {
              groupId: 'payment-consumer',
            },
          },
        },
      ]),
    ],
    providers: [OrderService],
    controllers: [OrderController],
  })
export class OrderModule {

}