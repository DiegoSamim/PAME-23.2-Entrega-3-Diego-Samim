import { Injectable } from '@nestjs/common';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  private produtosList: Produto[] = [];

  create(produtoDto: CreateProdutoDto): void {
    const produto: Produto = {
      id_produto: this.produtosList.length + 1,
      ...produtoDto,
    };

    this.produtosList.push(produto);
  }

  getAllProdutos(): Produto[] {
    return this.produtosList;
  }

  updateProduto(id: number, updateProdutosDto: UpdateProdutoDto) {
    return `Produto com ID ${id} Atualizado com Sucesso`;
  }

  removeProduto(id: number) {
    return `Produto com ID ${id} removido`;
  }

  findByCategoria(idCategoria: number): Produto[] {
    // Exemplo básico: filtrar produtos por categoria
    return this.produtosList.filter(produto => produto.categoria.FK === idCategoria);
  }

}
