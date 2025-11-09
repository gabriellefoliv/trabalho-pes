import type Produto from "./produto";

class ItemCarrinho {
    codICarrinho: number;
    produto: Produto
    quantidade: number;
    precoUnitario: number;

    constructor(
        codICarrinho: number,
        produto: Produto,
        quantidade: number,
    ) {
        this.codICarrinho = codICarrinho;
        this.produto = produto;
        this.quantidade = quantidade;
        this.precoUnitario = produto.preco;
    }
}

export default ItemCarrinho;