import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CupomService } from './cupom.service';
import { CreateCupomDto } from './dto/create-cupom.dto';
import { UpdateCupomDto } from './dto/update-cupom.dto';

@Controller('cupom')
export class CupomController {
  constructor(private readonly cupomService: CupomService) {}

  // Método para criar um novo cupom
  @Post()
  create(@Body() createCupomDto: CreateCupomDto) {
    return this.cupomService.create(createCupomDto);
  }

  // Método para obter todos os cupons
  @Get()
  findAll() {
    return this.cupomService.findAll();
  }

  // Método para obter um cupom por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cupomService.findOne(+id);
  }

  // Método para atualizar um cupom por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCupomDto: UpdateCupomDto) {
    return this.cupomService.update(+id, updateCupomDto);
  }

  // Método para remover um cupom por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cupomService.remove(+id);
  }
}
