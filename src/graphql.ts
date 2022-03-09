
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateOrderInput {
    price: number;
    address: string;
    phone: number;
    clientName: string;
    observation: string;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class UpdateOrderInput {
    id: number;
}

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class Order {
    id: number;
    price: number;
    address: string;
    phone: number;
    clientName: string;
    observation: string;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract orders(orderBy?: Nullable<OrderByParams>): Nullable<Order>[] | Promise<Nullable<Order>[]>;

    abstract order(id: number): Nullable<Order> | Promise<Nullable<Order>>;

    abstract totalOrders(): number | Promise<number>;
}

export abstract class IMutation {
    abstract createOrder(createOrderInput: CreateOrderInput): Order | Promise<Order>;

    abstract updateOrder(updateOrderInput: UpdateOrderInput): Order | Promise<Order>;

    abstract removeOrder(id: number): Nullable<Order> | Promise<Nullable<Order>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
