import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  // Rota para criar um novo usuário
  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto): string {
    return this.usuarioService.create(createUsuarioDto);
  }

  // Rota para obter todos os clientes
  @Get('/clientes')
  getAllClientes(): Usuario[] {
    return this.usuarioService.getAllUsuariosClientes();
  }

  // Rota para obter um usuário por ID
  @Get('/:id')
  getUsuarioById(@Param('id') id: string): Usuario {
    return this.usuarioService.getUsuarioById(Number(id));
  }

  // Rota para excluir um usuário por ID
  @Delete('/:id')
  deleteUsuarioById(@Param('id') id: string): string {
    return this.usuarioService.deleteUsuarioById(Number(id));
  }
}

