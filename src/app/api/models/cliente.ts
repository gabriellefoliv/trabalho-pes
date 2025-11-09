class Cliente {
    codCliente: number;
    nome: string;
    endereco: string;

    constructor(
        codCliente: number,
        nome: string,
        endereco: string
    ) {
        this.codCliente = codCliente;
        this.nome = nome;
        this.endereco = endereco;
    }   
}

export default Cliente;