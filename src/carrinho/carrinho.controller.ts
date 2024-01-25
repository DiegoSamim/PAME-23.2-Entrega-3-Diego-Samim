import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto';

@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) {}

  // Rota para adicionar um item ao carrinho
  @Post()
  create(@Body() createCarrinhoDto: CreateCarrinhoDto) {
    return this.carrinhoService.create(createCarrinhoDto);
  }

  // Rota para obter todos os itens no carrinho
  @Get()
  findAll() {
    return this.carrinhoService.findAll();
  }

  // Rota para obter um item no carrinho por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carrinhoService.findOne(+id);
  }

  // Rota para atualizar um item no carrinho por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarrinhoDto: UpdateCarrinhoDto) {
    return this.carrinhoService.update(+id, updateCarrinhoDto);
  }

  // Rota para remover um item do carrinho por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carrinhoService.remove(+id);
  }

  // Rota para remover todos os itens do carrinho por ID do usuário
  @Delete(':id_usuario/:id')
  removeByIdUsuario(@Param('id_usuario') idUsuario: string) {
    return this.carrinhoService.removeByIdUsuario(+idUsuario);
  }
}
