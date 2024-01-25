import { Injectable } from '@nestjs/common';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';

@Injectable()
export class UnidadeService {
  // Método para criar uma nova unidade
  create(createUnidadeDto: CreateUnidadeDto) {
    return 'Esta ação adiciona uma nova unidade';
  }

  // Método para obter todas as unidades
  findAll() {
    return 'Esta ação retorna todas as unidades';
  }

  // Método para obter uma unidade por ID
  findOne(id: number) {
    return `Esta ação retorna a unidade #${id}`;
  }

  // Método para atualizar uma unidade por ID
  update(id: number, updateUnidadeDto: UpdateUnidadeDto) {
    return `Esta ação atualiza a unidade #${id}`;
  }

  // Método para remover uma unidade por ID
  remove(id: number) {
    return `Esta ação remove a unidade #${id}`;
  }
}
