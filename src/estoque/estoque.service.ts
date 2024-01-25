import { Injectable } from '@nestjs/common';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';

@Injectable()
export class EstoqueService {
  // Método para criar um novo estoque
  create(createEstoqueDto: CreateEstoqueDto) {
    return 'Esta ação adiciona um novo estoque';
  }

  // Método para obter todos os estoques
  findAll() {
    return 'Esta ação retorna todos os estoques';
  }

  // Método para obter um estoque específico com base no ID
  findOne(id: number) {
    return `Esta ação retorna o estoque #${id}`;
  }

  // Método para atualizar um estoque com base no ID
  update(id: number, updateEstoqueDto: UpdateEstoqueDto) {
    return `Esta ação atualiza o estoque #${id}`;
  }

  // Método para remover um estoque com base no ID
  remove(id: number) {
    return `Esta ação remove o estoque #${id}`;
  }
}
