import { Injectable, NotFoundException } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuarioService {
  // Lista que armazena os usuários
  private listaUsuarios: Usuario[] = [];

  // Método para criar um novo usuário
  create(createUsuarioDto: CreateUsuarioDto): string {
    // Gera um novo ID para o usuário
    const usuario: Usuario = {
      id_usuario: this.listaUsuarios.length + 1,
      ...createUsuarioDto,
    };

    // Adiciona o usuário à lista
    this.listaUsuarios.push(usuario);

    // Retorna uma mensagem indicando sucesso
    return 'Usuário criado com sucesso!';
  }

  // Método para obter todos os usuários do tipo cliente
  getAllUsuariosClientes(): Usuario[] {
    return this.listaUsuarios.filter(usuario => usuario.tipo === 'cliente');
  }

  // Método para obter um usuário por ID
  getUsuarioById(id: number): Usuario {
    return this.listaUsuarios.find(usuario => usuario.id_usuario === id);
  }

  // Método para excluir um usuário por ID
  deleteUsuarioById(id: number): string {
    // Encontra o índice do usuário na lista
    const index = this.listaUsuarios.findIndex(usuario => usuario.id_usuario === id);
    
    // Se o usuário não for encontrado, lança uma exceção de "Não encontrado"
    if (index === -1) {
      throw new NotFoundException('Usuário não encontrado');
    }

    // Remove o usuário da lista
    this.listaUsuarios.splice(index, 1);

    // Retorna uma mensagem indicando sucesso
    return 'Usuário excluído com sucesso!';
  }
}
