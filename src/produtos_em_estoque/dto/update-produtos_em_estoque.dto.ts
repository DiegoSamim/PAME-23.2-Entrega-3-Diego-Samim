import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutosEmEstoqueDto } from './create-produtos_em_estoque.dto';

export class UpdateProdutosEmEstoqueDto extends PartialType(CreateProdutosEmEstoqueDto) {}
