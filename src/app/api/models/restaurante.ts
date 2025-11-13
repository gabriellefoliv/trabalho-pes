class Restaurante {
  codRestaurante: number;
  nome: string;
  cnpj: string;
  endereco: string;

  constructor(
    codRestaurante: number, 
    nome: string, 
    cnpj: string, 
    endereco: string
  ) {
    this.codRestaurante = codRestaurante;
    this.nome = nome;
    this.cnpj = cnpj;
    this.endereco = endereco;
  }
}

export default Restaurante;