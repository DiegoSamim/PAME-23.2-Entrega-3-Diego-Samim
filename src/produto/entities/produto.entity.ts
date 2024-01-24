export class Produto {
    id_produto:     number;
    nome_produto:   string;
    preco:          number;
    descricao:      string;
    categoria:      {FK: number;};
}
