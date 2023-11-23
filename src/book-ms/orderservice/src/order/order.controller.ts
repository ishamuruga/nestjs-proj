import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './order.dto';



@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('init')
  makePayment(@Body(ValidationPipe) createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }
}