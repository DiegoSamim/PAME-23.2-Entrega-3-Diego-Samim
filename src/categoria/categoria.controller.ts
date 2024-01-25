import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  // Método para criar uma nova categoria
  @Post()
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaService.create(createCategoriaDto);
  }

  // Método para obter todas as categorias
  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }

  // Método para obter uma categoria por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaService.findOne(+id);
  }

  // Método para atualizar uma categoria por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriaService.update(+id, updateCategoriaDto);
  }

  // Método para remover uma categoria por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaService.remove(+id);
  }
}
