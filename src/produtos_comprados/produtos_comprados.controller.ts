import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutosCompradosService } from './produtos_comprados.service';
import { CreateProdutosCompradoDto } from './dto/create-produtos_comprado.dto';
import { UpdateProdutosCompradoDto } from './dto/update-produtos_comprado.dto';

@Controller('produtos-comprados')
export class ProdutosCompradosController {
  constructor(private readonly produtosCompradosService: ProdutosCompradosService) {}

  @Post()
  create(@Body() createProdutosCompradoDto: CreateProdutosCompradoDto) {
    return this.produtosCompradosService.create(createProdutosCompradoDto);
  }

  @Get()
  findAll() {
    return this.produtosCompradosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosCompradosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutosCompradoDto: UpdateProdutosCompradoDto) {
    return this.produtosCompradosService.update(+id, updateProdutosCompradoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtosCompradosService.remove(+id);
  }
}
