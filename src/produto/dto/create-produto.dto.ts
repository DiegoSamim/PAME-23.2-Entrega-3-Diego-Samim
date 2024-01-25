export class CreateProdutoDto {
    nome_produto: string;
    preco: number;
    descricao: string;
    categoria: { FK: number };
  }
  
