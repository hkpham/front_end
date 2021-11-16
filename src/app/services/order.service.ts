import { Injectable } from '@angular/core';
import { Order } from '../models/order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: Order[] = [
    new Order(1, 'Order 1', 'xyz', 345),
    new Order(2, 'Order 2', 'xyz', 345),
    new Order(3, 'Order 3', 'xyz', 345),
    new Order(4, 'Order 4', 'xyz', 345),
    new Order(5, 'Order 5', 'xyz', 345)
  ]

  constructor() { }

  getOrders(): Order[] {
    return this.orders;
  }
}
