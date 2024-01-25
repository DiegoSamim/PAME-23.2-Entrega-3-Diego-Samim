import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  // Endpoint para criar um novo pedido
  @Post()
  create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidoService.create(createPedidoDto);
  }

  // Endpoint para obter todos os pedidos
  @Get()
  findAll() {
    return this.pedidoService.findAll();
  }

  // Endpoint para obter um pedido específico com base no ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidoService.findOne(+id);
  }

  // Endpoint para atualizar um pedido com base no ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    return this.pedidoService.update(+id, updatePedidoDto);
  }

  // Endpoint para remover um pedido com base no ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidoService.remove(+id);
  }

  // Endpoint para obter pedidos de um usuário específico com base no ID do usuário
  @Get('usuario/:idUsuario')
  getPedidosByUsuario(@Param('idUsuario') idUsuario: string) {
    return this.pedidoService.getPedidosByUsuario(idUsuario);
  }
}
