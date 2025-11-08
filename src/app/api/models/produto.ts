import type Categoria from './categoria';
import type Restaurante from './restaurante'

class Produto {
  codProduto: number;
  nome: string;
  imagem: string;
  descricao: string;
  preco: number;
  quantidade: number;
  categoria: Categoria;
  restaurante: Restaurante;
  tempoPreparo: number;

  constructor(
    codProduto: number,
    nome: string,
    imagem: string,
    descricao: string,
    preco: number,
    quantidade: number,
    categoria: Categoria,
    restaurante: Restaurante,
    tempoPreparo: number,
  ) {
    this.codProduto = codProduto;
    this.nome = nome;
    this.imagem = imagem;
    this.descricao = descricao;
    this.preco = preco;
    this.quantidade = quantidade;
    this.categoria = categoria;
    this.restaurante = restaurante;
    this.tempoPreparo = tempoPreparo;
  }
}


export default Produto;