import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) {}

  // Rota para criar um novo estoque
  @Post()
  create(@Body() createEstoqueDto: CreateEstoqueDto) {
    return this.estoqueService.create(createEstoqueDto);
  }

  // Rota para obter todos os estoques
  @Get()
  findAll() {
    return this.estoqueService.findAll();
  }

  // Rota para obter um estoque específico com base no ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estoqueService.findOne(+id);
  }

  // Rota para atualizar um estoque com base no ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstoqueDto: UpdateEstoqueDto) {
    return this.estoqueService.update(+id, updateEstoqueDto);
  }

  // Rota para remover um estoque com base no ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estoqueService.remove(+id);
  }
}
