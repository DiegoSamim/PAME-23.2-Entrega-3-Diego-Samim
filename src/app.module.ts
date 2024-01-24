import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { CategoriaModule } from './categoria/categoria.module';
import { EstoqueModule } from './estoque/estoque.module';
import { UnidadeModule } from './unidade/unidade.module';
import { CupomModule } from './cupom/cupom.module';
import { ProdutoModule } from './produto/produto.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { PedidoModule } from './pedido/pedido.module';
import { ProdutosCompradosModule } from './produtos_comprados/produtos_comprados.module';
import { ProdutosEmEstoqueModule } from './produtos_em_estoque/produtos_em_estoque.module';

@Module({
  imports: [UsuarioModule, CategoriaModule, EstoqueModule, UnidadeModule, CupomModule, ProdutoModule, CarrinhoModule, PedidoModule, ProdutosCompradosModule, ProdutosEmEstoqueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
