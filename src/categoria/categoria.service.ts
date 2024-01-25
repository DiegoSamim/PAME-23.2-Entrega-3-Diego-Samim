import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {
  // Método para criar uma nova categoria
  create(createCategoriaDto: CreateCategoriaDto) {
    return 'Esta ação adiciona uma nova categoria';
  }

  // Método para obter todas as categorias
  findAll() {
    return 'Esta ação retorna todas as categorias';
  }

  // Método para obter uma categoria por ID
  findOne(id: number) {
    return `Esta ação retorna a categoria #${id}`;
  }

  // Método para atualizar uma categoria por ID
  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `Esta ação atualiza a categoria #${id}`;
  }

  // Método para remover uma categoria por ID
  remove(id: number) {
    return `Esta ação remove a categoria #${id}`;
  }
}
