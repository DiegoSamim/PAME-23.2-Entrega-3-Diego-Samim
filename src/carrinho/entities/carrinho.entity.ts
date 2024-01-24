export class Carrinho {
    id_carrinho:  number;
    quantidade:   number;
    id_usuario:   {FK: number;};
    id_produto:   {FK: number;};
}
