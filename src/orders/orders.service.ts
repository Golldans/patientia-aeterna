import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { OrderByParams } from 'src/graphql';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  create(createOrderInput: Prisma.OrderCreateInput) {
    return this.prisma.order.create({
      data: createOrderInput,
    });
  }

  findAll(orderBy?: OrderByParams) {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {};
    return this.prisma.order.findMany({
      orderBy: { [field]: direction },
    });
  }

  findOne(orderWhereUniqueInput: Prisma.OrderWhereUniqueInput) {
    return this.prisma.order.findUnique({
      where: orderWhereUniqueInput,
    });
  }

  async getTotal() {
    const response = await this.prisma.order.aggregate({
      _sum: {
        price: true,
      },
    });

    return response._sum.price;
  }
  // update(id: number, updateOrderInput: UpdateOrderInput) {
  //   return `This action updates a #${id} order`;
  // }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
