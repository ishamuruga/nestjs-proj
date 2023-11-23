import { Inject, Injectable } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { CreateOrderDto } from "./order.dto";

@Injectable()
export class OrderService {
    constructor(
        @Inject('ORDER_MICROSERVICE') private readonly orderClient: ClientKafka
      ) {}

      createOrder(createOrderDto: CreateOrderDto) {
        this.orderClient.emit('process_order', JSON.stringify(createOrderDto));
      }
}