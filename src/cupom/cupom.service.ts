import { Injectable } from '@nestjs/common';
import { CreateCupomDto } from './dto/create-cupom.dto';
import { UpdateCupomDto } from './dto/update-cupom.dto';

@Injectable()
export class CupomService {
  // Método para criar um novo cupom
  create(createCupomDto: CreateCupomDto) {
    return 'Esta ação adiciona um novo cupom';
  }

  // Método para obter todos os cupons
  findAll() {
    return 'Esta ação retorna todos os cupons';
  }

  // Método para obter um cupom por ID
  findOne(id: number) {
    return `Esta ação retorna o cupom #${id}`;
  }

  // Método para atualizar um cupom por ID
  update(id: number, updateCupomDto: UpdateCupomDto) {
    return `Esta ação atualiza o cupom #${id}`;
  }

  // Método para remover um cupom por ID
  remove(id: number) {
    return `Esta ação remove o cupom #${id}`;
  }
}
