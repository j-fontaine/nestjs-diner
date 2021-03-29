import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { MenuService } from './menu.service';

@Controller('diner/menu')
export class MenuApiController {
  constructor(private readonly menuService: MenuService) {}

  @Get('/:menuType')
  getMenu(@Param('menuType') menuType: string) {
    return JSON.stringify(this.menuService.availableMenu(menuType));
  }

  @Post('/order')
  @HttpCode(HttpStatus.ACCEPTED)
  placeOrder(@Body() createOrderDto: CreateOrderDto) {
    this.menuService.placeOrder(createOrderDto);
    return this.menuService.getOrder(createOrderDto.id);
  }

  @Get('/order/list')
  listOrders() {
    return this.menuService.listOrders();
  }

  @Get('/order/:id')
  getOrder(@Param('id') orderNumber: string) {
    console.log(`Requesting Info on order: ${orderNumber}`);
    const order = this.menuService.getOrder(Number(orderNumber));
    if (!order) {
      throw new NotFoundException('Unable to locate order');
    }
    console.log(order.id);
    return order;
  }

  @Put('/order/complete/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  completeOrder(@Param('id') id: number) {
    this.menuService.completeOrder(id);
  }
}
