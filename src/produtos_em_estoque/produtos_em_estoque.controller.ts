import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProdutosEmEstoqueService } from './produtos_em_estoque.service';
import { CreateProdutosEmEstoqueDto } from './dto/create-produtos_em_estoque.dto';
import { UpdateProdutosEmEstoqueDto } from './dto/update-produtos_em_estoque.dto';

@Controller('produtos-em-estoque')
export class ProdutosEmEstoqueController {
  constructor(private readonly produtosEmEstoqueService: ProdutosEmEstoqueService) {}

  @Post()
  create(@Body() createProdutosEmEstoqueDto: CreateProdutosEmEstoqueDto) {
    return this.produtosEmEstoqueService.create(createProdutosEmEstoqueDto);
  }

  @Get()
  findAll() {
    return this.produtosEmEstoqueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosEmEstoqueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutosEmEstoqueDto: UpdateProdutosEmEstoqueDto) {
    return this.produtosEmEstoqueService.update(+id, updateProdutosEmEstoqueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtosEmEstoqueService.remove(+id);
  }

  @Get('filtro/estoque')
  findPorEstoqueId(@Query('idEstoque') idEstoque: number) {
    return this.produtosEmEstoqueService.findByEstoqueId(idEstoque);
  }
}
