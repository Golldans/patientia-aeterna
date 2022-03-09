import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrderCreateInput } from 'src/@generated/prisma-nestjs-graphql/order/order-create.input';
import { OrderByParams } from 'src/graphql';
import { OrdersService } from './orders.service';

@Resolver('Order')
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Mutation('createOrder')
  create(@Args('createOrderInput') createOrderInput: OrderCreateInput) {
    return this.ordersService.create(createOrderInput);
  }

  @Query('orders')
  findAll(@Args('orderBy') orderBy?: OrderByParams) {
    return this.ordersService.findAll(orderBy);
  }

  @Query('order')
  findOne(@Args('id') id: number) {
    return this.ordersService.findOne({ id });
  }

  @Query('totalOrders')
  totalOrders() {
    return this.ordersService.getTotal();
  }
  // @Mutation('updateOrder')
  // update(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
  //   return this.ordersService.update(updateOrderInput.id, updateOrderInput);
  // }

  @Mutation('removeOrder')
  remove(@Args('id') id: number) {
    return this.ordersService.remove(id);
  }
}
