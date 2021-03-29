import { Module } from '@nestjs/common';
import { MenuApiController } from './menu-api.controller';
import { MenuService } from './menu.service';
import { BreakfastModule } from './breakfast/breakfast.module';
import { LunchModule } from './lunch/lunch.module';

@Module({
  controllers: [MenuApiController],
  providers: [MenuService],
  exports: [],
  imports: [BreakfastModule, LunchModule],
})
export class MenuModule {}
