import { Module } from '@nestjs/common';
import { ProdutosCompradosService } from './produtos_comprados.service';
import { ProdutosCompradosController } from './produtos_comprados.controller';

@Module({
  controllers: [ProdutosCompradosController],
  providers: [ProdutosCompradosService],
})
export class ProdutosCompradosModule {}
