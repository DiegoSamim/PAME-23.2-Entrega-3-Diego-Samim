import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto): string {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get('/clientes')
  getAllClientes(): Usuario[] {
    return this.usuarioService.getAllUsuariosClientes();
  }

  @Get('/:id')
  getUsuarioById(@Param('id') id: string): Usuario {
    return this.usuarioService.getUsuarioById(Number(id));
  }
}
