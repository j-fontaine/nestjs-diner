import { Test, TestingModule } from '@nestjs/testing';
import { MenuApiController } from './menu-api.controller';
import { MenuModule } from './menu.module';

describe('MenuApiController', () => {
  let controller: MenuApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MenuModule],
    }).compile();

    controller = module.get<MenuApiController>(MenuApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
