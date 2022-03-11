import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { OrderCreateInput } from 'src/@generated/prisma-nestjs-graphql/order/order-create.input';
import { OrderByParams } from 'src/graphql';
import { OrdersService } from './orders.service';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();
@Resolver('Order')
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Mutation('createOrder')
  async create(@Args('createOrderInput') createOrderInput: OrderCreateInput) {
    const created = await this.ordersService.create(createOrderInput);

    const total = await this.ordersService.getTotal();

    pubSub.publish('totalUpdated', { totalUpdated: { total } });

    return created;
  }

  @Subscription()
  totalUpdated() {
    console.log('aaaa');
    return pubSub.asyncIterator('totalupdated');
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
