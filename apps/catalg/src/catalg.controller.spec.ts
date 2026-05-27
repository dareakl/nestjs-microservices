import { Test, TestingModule } from '@nestjs/testing';
import { CatalgController } from './catalg.controller';
import { CatalgService } from './catalg.service';

describe('CatalgController', () => {
  let catalgController: CatalgController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatalgController],
      providers: [CatalgService],
    }).compile();

    catalgController = app.get<CatalgController>(CatalgController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(catalgController.getHello()).toBe('Hello World!');
    });
  });
});
