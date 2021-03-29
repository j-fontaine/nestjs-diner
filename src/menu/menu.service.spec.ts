import { Test, TestingModule } from '@nestjs/testing';
import { LunchModule } from './lunch/lunch.module';
import { MenuModule } from './menu.module';
import { MenuService } from './menu.service';

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MenuModule, LunchModule],
    }).compile();

    service = module.get<MenuService>(MenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
