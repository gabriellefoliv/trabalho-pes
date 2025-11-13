import { Item } from "@radix-ui/react-select";
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

    calcularTotal(): number {
        return this.itens.reduce((sum, item) => 
            sum + item.calcularSubtotal(), 0
        );
    }

    totalItens(): number {
        return this.itens.reduce((sum, item) => 
            sum + item.quantidade, 0
        );
    }
}

export default Carrinho;