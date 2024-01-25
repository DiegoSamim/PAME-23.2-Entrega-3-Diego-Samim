import { Controller, Post, Body, Get, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  createProduto(@Body() produtoDto: CreateProdutoDto): string {
    this.produtoService.create(produtoDto);
    return 'Produto adicionado com sucesso!';
  }

  @Get()
  getAllProdutos(): Produto[] {
    return this.produtoService.getAllProdutos();
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.updateProduto(+id, updateProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtoService.removeProduto(+id);
  }

  @Get('filtro/categoria/:idCategoria')
  findByCategoria(@Param('idCategoria', ParseIntPipe) idCategoria: number): Produto[] {
    return this.produtoService.findByCategoria(idCategoria);
  }
}
