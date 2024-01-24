import { Injectable } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuarioService {
  private listaUsuarios: Usuario[] = [];

  create(createUsuarioDto: CreateUsuarioDto): string {
    const usuario: Usuario = {
      id_usuario: this.listaUsuarios.length + 1,
      ...createUsuarioDto,
    };

    this.listaUsuarios.push(usuario);

    return 'Usuário criado com sucesso!';
  }

  getAllUsuariosClientes(): Usuario[] {
    return this.listaUsuarios.filter(usuario => usuario.tipo === 'cliente');
  }

  getUsuarioById(id: number): Usuario {
    return this.listaUsuarios.find(usuario => usuario.id_usuario === id);
  }
}
