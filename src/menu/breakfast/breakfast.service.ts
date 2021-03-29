import { Injectable } from '@nestjs/common';
import { DinerService } from '../entities/diner-service';
import { Menu } from '../entities/menu';

@Injectable()
export class BreakfastService implements DinerService {
  private breakfastMenu: Menu;

  constructor() {
    this.breakfastMenu = new Menu();
    this.breakfastMenu.drinks = [
      { name: 'Soda', price: 2 },
      { name: 'Water', price: 0 },
    ];
  }

  getMenu(): Menu {
    return this.breakfastMenu;
  }
}
