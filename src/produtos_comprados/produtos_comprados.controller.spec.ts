import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosCompradosController } from './produtos_comprados.controller';
import { ProdutosCompradosService } from './produtos_comprados.service';

describe('ProdutosCompradosController', () => {
  let controller: ProdutosCompradosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutosCompradosController],
      providers: [ProdutosCompradosService],
    }).compile();

    controller = module.get<ProdutosCompradosController>(ProdutosCompradosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
