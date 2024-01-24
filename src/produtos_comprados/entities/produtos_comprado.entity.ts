export class ProdutosComprado {
    id_produtos_comprados:      number;
    quantidade: number;
    id_pedido:  {FK: number;};
    id_produto: {FK: number;};
}
