export class Pedido {
    id_pedido:      number;
    data_pedido:    Date;
    status:         string;
    id_usuario:     {FK: number};
    id_cupom:       {FK: number};
}
