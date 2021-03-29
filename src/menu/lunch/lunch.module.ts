import { Module } from '@nestjs/common';
import { LunchService } from './lunch.service';

@Module({
  providers: [LunchService],
  exports: [LunchService],
})
export class LunchModule {}
