import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidoService {
  // Método para criar um novo pedido
  create(createPedidoDto: CreatePedidoDto) {
    return 'O pedido foi criado';
  }

  // Método para obter todos os pedidos
  findAll() {
    return `This action returns all pedido`;
  }

  // Método para obter um pedido específico por ID
  findOne(id: number) {
    return `This action returns a #${id} pedido`;
  }

  // Método para atualizar um pedido por ID
  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  // Método para remover um pedido por ID
  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }

  // Método para obter pedidos de um usuário específico
  getPedidosByUsuario(idUsuario: string) {
    return `Consulta bem-sucedida para pedidos do usuário com ID ${idUsuario}`;
  }
}
