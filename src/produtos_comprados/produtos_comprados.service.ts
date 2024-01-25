import { Injectable } from '@nestjs/common';
import { CreateProdutosCompradoDto } from './dto/create-produtos_comprado.dto';
import { UpdateProdutosCompradoDto } from './dto/update-produtos_comprado.dto';

@Injectable()
export class ProdutosCompradosService {
  // Método para criar um novo produto comprado
  create(createProdutosCompradoDto: CreateProdutosCompradoDto) {
    return 'Esta ação adiciona um novo produto comprado';
  }

  // Método para obter todos os produtos comprados
  findAll() {
    return 'Esta ação retorna todos os produtos comprados';
  }

  // Método para obter um produto comprado por ID
  findOne(id: number) {
    return `Esta ação retorna o produto comprado #${id}`;
  }

  // Método para atualizar um produto comprado por ID
  update(id: number, updateProdutosCompradoDto: UpdateProdutosCompradoDto) {
    return `Esta ação atualiza o produto comprado #${id}`;
  }

  // Método para remover um produto comprado por ID
  remove(id: number) {
    return `Esta ação remove o produto comprado #${id}`;
  }
}
