export class ProdutosEmEstoque {
    id_produtos_em_estoque:      number;
    quantidade: number;
    id_estoque: {FK: number;};
    id_produto: {FK: number;};
}
