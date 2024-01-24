import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutosCompradoDto } from './create-produtos_comprado.dto';

export class UpdateProdutosCompradoDto extends PartialType(CreateProdutosCompradoDto) {}
