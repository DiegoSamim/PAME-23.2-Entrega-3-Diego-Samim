import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosCompradosService } from './produtos_comprados.service';

describe('ProdutosCompradosService', () => {
  let service: ProdutosCompradosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutosCompradosService],
    }).compile();

    service = module.get<ProdutosCompradosService>(ProdutosCompradosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
