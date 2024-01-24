import { Injectable } from '@nestjs/common';
import { CreateProdutosEmEstoqueDto } from './dto/create-produtos_em_estoque.dto';
import { UpdateProdutosEmEstoqueDto } from './dto/update-produtos_em_estoque.dto';

@Injectable()
export class ProdutosEmEstoqueService {
  create(createProdutosEmEstoqueDto: CreateProdutosEmEstoqueDto) {
    return 'This action adds a new produtosEmEstoque';
  }

  findAll() {
    return `This action returns all produtosEmEstoque`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produtosEmEstoque`;
  }

  update(id: number, updateProdutosEmEstoqueDto: UpdateProdutosEmEstoqueDto) {
    return `This action updates a #${id} produtosEmEstoque`;
  }

  remove(id: number) {
    return `This action removes a #${id} produtosEmEstoque`;
  }
}
