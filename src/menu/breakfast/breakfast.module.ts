import { Module } from '@nestjs/common';
import { BreakfastService } from './breakfast.service';

@Module({
  providers: [BreakfastService],
})
export class BreakfastModule {}
