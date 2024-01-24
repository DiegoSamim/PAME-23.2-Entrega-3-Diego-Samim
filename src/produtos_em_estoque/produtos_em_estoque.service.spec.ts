import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosEmEstoqueService } from './produtos_em_estoque.service';

describe('ProdutosEmEstoqueService', () => {
  let service: ProdutosEmEstoqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutosEmEstoqueService],
    }).compile();

    service = module.get<ProdutosEmEstoqueService>(ProdutosEmEstoqueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
