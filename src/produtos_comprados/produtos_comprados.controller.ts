import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutosCompradosService } from './produtos_comprados.service';
import { CreateProdutosCompradoDto } from './dto/create-produtos_comprado.dto';
import { UpdateProdutosCompradoDto } from './dto/update-produtos_comprado.dto';

@Controller('produtos-comprados')
export class ProdutosCompradosController {
  constructor(private readonly produtosCompradosService: ProdutosCompradosService) {}

  // Rota para criar um novo produto comprado
  @Post()
  create(@Body() createProdutosCompradoDto: CreateProdutosCompradoDto) {
    return this.produtosCompradosService.create(createProdutosCompradoDto);
  }

  // Rota para obter todos os produtos comprados
  @Get()
  findAll() {
    return this.produtosCompradosService.findAll();
  }

  // Rota para obter um produto comprado por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosCompradosService.findOne(+id);
  }

  // Rota para atualizar um produto comprado por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutosCompradoDto: UpdateProdutosCompradoDto) {
    return this.produtosCompradosService.update(+id, updateProdutosCompradoDto);
  }

  // Rota para remover um produto comprado por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtosCompradosService.remove(+id);
  }
}
