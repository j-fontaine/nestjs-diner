import { Injectable } from '@nestjs/common';
import { Menu } from './entities/menu';
import { Order } from './entities/order';
import { LunchService } from './lunch/lunch.service';

@Injectable()
export class MenuService {
  private orders: Map<number, Order> = new Map<number, Order>();

  constructor(private readonly lunchService: LunchService) {}

  availableMenu(servingTime: string): Menu {
    console.log(`Service time ${servingTime}`);
    return this.lunchService.getMenu();
  }

  placeOrder(anOrder: Order) {
    console.log(`Added Order:  ${anOrder.id}`);
    this.orders.set(anOrder.id, anOrder);
    console.log(`Orders remaining:  ${this.orders.size}`);
  }

  listOrders() {
    const orderValues = [];
    this.orders.forEach(value => {
      console.log(JSON.stringify(value));
      return orderValues.push(value);
    });
    return orderValues;
  }

  getOrder(orderNumber: number) {
    return this.orders.get(Number(orderNumber));
  }

  completeOrder(id: number) {
    this.orders.delete(id);
    console.log(`Orders remaining:  ${this.orders.size}`);
  }
}
