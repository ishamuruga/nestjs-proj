import { IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  orderId: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  amount:number;
}