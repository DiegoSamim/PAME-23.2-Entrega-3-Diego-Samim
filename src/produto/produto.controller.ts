import { Controller, Post, Body, Get, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  // Rota para criar um novo produto
  @Post()
  createProduto(@Body() produtoDto: CreateProdutoDto): string {
    // Chama o método create do serviço para adicionar um novo produto
    this.produtoService.create(produtoDto);
    // Retorna uma mensagem indicando sucesso
    return 'Produto adicionado com sucesso!';
  }

  // Rota para obter todos os produtos
  @Get()
  getAllProdutos(): Produto[] {
    // Chama o método getAllProdutos do serviço para obter todos os produtos
    return this.produtoService.getAllProdutos();
  }
  
  // Rota para atualizar um produto por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    // Chama o método updateProduto do serviço para atualizar um produto
    return this.produtoService.updateProduto(+id, updateProdutoDto);
  }

  // Rota para excluir um produto por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    // Chama o método removeProduto do serviço para excluir um produto
    return this.produtoService.removeProduto(+id);
  }

  // Rota para obter produtos por categoria
  @Get('filtro/categoria/:idCategoria')
  findByCategoria(@Param('idCategoria', ParseIntPipe) idCategoria: number): Produto[] {
    // Chama o método findByCategoria do serviço para obter produtos por categoria
    return this.produtoService.findByCategoria(idCategoria);
  }
}
