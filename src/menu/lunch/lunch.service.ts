import { Injectable } from '@nestjs/common';
import { DinerService } from '../entities/diner-service';
import { Menu } from '../entities/menu';

@Injectable()
export class LunchService implements DinerService {
  private lunchMenu: Menu;

  constructor() {
    this.lunchMenu = new Menu();
    this.lunchMenu.drinks = [
      { name: 'Soda', price: 2 },
      { name: 'Water', price: 0 },
    ];
  }

  getMenu(): Menu {
    return this.lunchMenu;
  }
}
