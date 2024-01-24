import { Module } from '@nestjs/common';
import { ProdutosEmEstoqueService } from './produtos_em_estoque.service';
import { ProdutosEmEstoqueController } from './produtos_em_estoque.controller';

@Module({
  controllers: [ProdutosEmEstoqueController],
  providers: [ProdutosEmEstoqueService],
})
export class ProdutosEmEstoqueModule {}
