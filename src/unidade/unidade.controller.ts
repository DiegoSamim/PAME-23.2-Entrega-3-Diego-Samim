import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnidadeService } from './unidade.service';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';

@Controller('unidade')
export class UnidadeController {
  constructor(private readonly unidadeService: UnidadeService) {}

  // Rota para criar uma nova unidade
  @Post()
  create(@Body() createUnidadeDto: CreateUnidadeDto) {
    return this.unidadeService.create(createUnidadeDto);
  }

  // Rota para obter todas as unidades
  @Get()
  findAll() {
    return this.unidadeService.findAll();
  }

  // Rota para obter uma unidade por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unidadeService.findOne(+id);
  }

  // Rota para atualizar uma unidade por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUnidadeDto: UpdateUnidadeDto) {
    return this.unidadeService.update(+id, updateUnidadeDto);
  }

  // Rota para remover uma unidade por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unidadeService.remove(+id);
  }
}
