import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProdutosEmEstoqueService } from './produtos_em_estoque.service';
import { CreateProdutosEmEstoqueDto } from './dto/create-produtos_em_estoque.dto';
import { UpdateProdutosEmEstoqueDto } from './dto/update-produtos_em_estoque.dto';

@Controller('produtos-em-estoque')
export class ProdutosEmEstoqueController {
  constructor(private readonly produtosEmEstoqueService: ProdutosEmEstoqueService) {}

  // Endpoint para criar um novo produto em estoque
  @Post()
  create(@Body() createProdutosEmEstoqueDto: CreateProdutosEmEstoqueDto) {
    return this.produtosEmEstoqueService.create(createProdutosEmEstoqueDto);
  }

  // Endpoint para obter todos os produtos em estoque
  @Get()
  findAll() {
    return this.produtosEmEstoqueService.findAll();
  }

  // Endpoint para obter um produto em estoque por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosEmEstoqueService.findOne(+id);
  }

  // Endpoint para atualizar um produto em estoque por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutosEmEstoqueDto: UpdateProdutosEmEstoqueDto) {
    return this.produtosEmEstoqueService.update(+id, updateProdutosEmEstoqueDto);
  }

  // Endpoint para remover um produto em estoque por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtosEmEstoqueService.remove(+id);
  }

  // Endpoint para filtrar produtos em estoque por ID de estoque
  @Get('filtro/estoque')
  findPorEstoqueId(@Query('idEstoque') idEstoque: number) {
    return this.produtosEmEstoqueService.findByEstoqueId(idEstoque);
  }
}
