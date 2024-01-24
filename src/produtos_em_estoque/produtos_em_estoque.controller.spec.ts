import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosEmEstoqueController } from './produtos_em_estoque.controller';
import { ProdutosEmEstoqueService } from './produtos_em_estoque.service';

describe('ProdutosEmEstoqueController', () => {
  let controller: ProdutosEmEstoqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutosEmEstoqueController],
      providers: [ProdutosEmEstoqueService],
    }).compile();

    controller = module.get<ProdutosEmEstoqueController>(ProdutosEmEstoqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
