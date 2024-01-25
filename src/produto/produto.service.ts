import { Injectable } from '@nestjs/common';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  // Lista que armazena os produtos
  private produtosList: Produto[] = [];

  // Método para criar um novo produto
  create(produtoDto: CreateProdutoDto): void {
    // Gera um novo ID para o produto
    const produto: Produto = {
      id_produto: this.produtosList.length + 1,
      ...produtoDto,
    };

    // Adiciona o produto à lista
    this.produtosList.push(produto);
  }

  // Método para obter todos os produtos
  getAllProdutos(): Produto[] {
    return this.produtosList;
  }

  // Método para atualizar um produto por ID
  updateProduto(id: number, updateProdutosDto: UpdateProdutoDto): string {
    // Retorna uma mensagem indicando sucesso
    return `Produto com ID ${id} Atualizado com Sucesso`;
  }

  // Método para remover um produto por ID
  removeProduto(id: number): string {
    // Retorna uma mensagem indicando sucesso
    return `Produto com ID ${id} removido`;
  }

  // Método para obter produtos por categoria
  findByCategoria(idCategoria: number): Produto[] {
    // Exemplo básico: filtrar produtos por categoria
    return this.produtosList.filter(produto => produto.categoria.FK === idCategoria);
  }
}
