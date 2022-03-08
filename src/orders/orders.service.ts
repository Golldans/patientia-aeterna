import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
// import { CreateOrderInput } from './dto/create-order.input';
// import { UpdateOrderInput } from './dto/update-order.input';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  // create(createOrderInput: CreateOrderInput) {
  //   return 'This action adds a new order';
  // }

  findAll() {
    return this.prisma.order.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  // update(id: number, updateOrderInput: UpdateOrderInput) {
  //   return `This action updates a #${id} order`;
  // }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
