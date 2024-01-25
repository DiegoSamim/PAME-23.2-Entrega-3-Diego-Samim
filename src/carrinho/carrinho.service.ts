import { Injectable } from '@nestjs/common';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto';

@Injectable()
export class CarrinhoService {
  // Método para adicionar um novo item ao carrinho
  create(createCarrinhoDto: CreateCarrinhoDto) {
    return 'Esta ação adiciona um novo carrinho';
  }

  // Método para obter todos os itens no carrinho
  findAll() {
    return 'Esta ação retorna todos os carrinhos';
  }

  // Método para obter um item no carrinho por ID
  findOne(id: number) {
    return `Esta ação retorna o carrinho #${id}`;
  }

  // Método para atualizar um item no carrinho por ID
  update(id: number, updateCarrinhoDto: UpdateCarrinhoDto) {
    return `Esta ação atualiza o carrinho #${id}`;
  }

  // Método para remover um item do carrinho por ID
  remove(id: number): string {
    return `Item do carrinho com ID ${id} removido`;
  }

  // Método para remover todos os itens do carrinho por ID do usuário
  removeByIdUsuario(idUsuario: number): string {
    return `Todos os itens do carrinho do usuário ${idUsuario} removidos`;
  }
}
