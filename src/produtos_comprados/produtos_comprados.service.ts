import { Injectable } from '@nestjs/common';
import { CreateProdutosCompradoDto } from './dto/create-produtos_comprado.dto';
import { UpdateProdutosCompradoDto } from './dto/update-produtos_comprado.dto';

@Injectable()
export class ProdutosCompradosService {
  create(createProdutosCompradoDto: CreateProdutosCompradoDto) {
    return 'This action adds a new produtosComprado';
  }

  findAll() {
    return `This action returns all produtosComprados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produtosComprado`;
  }

  update(id: number, updateProdutosCompradoDto: UpdateProdutosCompradoDto) {
    return `This action updates a #${id} produtosComprado`;
  }

  remove(id: number) {
    return `This action removes a #${id} produtosComprado`;
  }
}
