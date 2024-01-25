import { Injectable, NotFoundException } from '@nestjs/common';
import { ProdutosEmEstoque } from './entities/produtos_em_estoque.entity';
import { CreateProdutosEmEstoqueDto } from './dto/create-produtos_em_estoque.dto';
import { UpdateProdutosEmEstoqueDto } from './dto/update-produtos_em_estoque.dto';

@Injectable()
export class ProdutosEmEstoqueService {
  // Lista de produtos em estoque
  private produtosEmEstoqueList: ProdutosEmEstoque[] = [];

  // Método para adicionar um novo produto em estoque
  create(createProdutosEmEstoqueDto: CreateProdutosEmEstoqueDto): string {
    return 'Esta ação adiciona um novo produto em estoque';
  }

  // Método para obter todos os produtos em estoque
  findAll(): string {
    return 'Esta ação retorna todos os produtos em estoque';
  }

  // Método para obter um produto em estoque por ID
  findOne(id: number): string {
    return `Esta ação retorna o produto em estoque #${id}`;
  }

  // Método para atualizar um produto em estoque por ID
  update(id: number, updateProdutosEmEstoqueDto: UpdateProdutosEmEstoqueDto): string {
    return `Esta ação atualiza o produto em estoque #${id}`;
  }

  // Método para remover um produto em estoque por ID
  remove(id: number): string {
    return `Esta ação remove o produto em estoque #${id}`;
  }

  // Método para filtrar produtos em estoque por ID de estoque
  findByEstoqueId(idEstoque: number): ProdutosEmEstoque[] {
    return this.produtosEmEstoqueList.filter(prod => prod.id_estoque.FK === idEstoque);
  }
}
