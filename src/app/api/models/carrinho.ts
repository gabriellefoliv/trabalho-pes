import type Cliente from "./cliente";
import type ItemCarrinho from "./itemCarrinho";

class Carrinho {
    codCarrinho: number;
    cliente: Cliente;
    itens: ItemCarrinho[];

    constructor(codCarrinho: number, cliente: Cliente) {
        this.codCarrinho = codCarrinho;
        this.cliente = cliente;
        this.itens = [];
    }
}

export default Carrinho;