import { NextResponse, NextRequest } from "next/server";
import { codClienteFixo } from "@/services/loaded/clientes";
import { getCarrinhoByClienteId } from "@/services/loaded/carrinhos";
import loadedProdutos from "@/services/loaded/produtos";
import ItemCarrinho from "@/app/api/models/itemCarrinho";

class CarrinhoController {

  async buscarItens(req: NextRequest) {
    try {
      const carrinho = getCarrinhoByClienteId(codClienteFixo); 
      return NextResponse.json(carrinho);
    } catch (error) {
      console.error("Erro em buscarCarrinho:", error);
      return NextResponse.json({ message: "Erro ao buscar carrinho" }, { status: 500 });
    }
  }

  async adicionarItem(req: NextRequest) {
    try {
      const body = await req.json();
      const { codProduto, quantidade } = body;

      if (codProduto === undefined || quantidade === undefined) {
        return NextResponse.json({ message: "Dados incompletos (cod ou qtd faltando)" }, { status: 400 });
      }

      if (quantidade <= 0) {
        return NextResponse.json({ message: "Quantidade deve ser positiva" }, { status: 400 });
      }

      const carrinho = getCarrinhoByClienteId(codClienteFixo);
      const produto = loadedProdutos.find(p => p.codProduto === codProduto);
      
      if (!produto) {
        return NextResponse.json({ message: "Produto não encontrado" }, { status: 404 });
      }

      const itemExistente = carrinho.itens.find(item => item.produto.codProduto === codProduto);

      if (itemExistente) {
        itemExistente.quantidade += quantidade;
      } else {
        const novoCodItem = (carrinho.itens.length > 0 ? Math.max(...carrinho.itens.map(item => item.codICarrinho)) : 0) + 1;
        const novoItem = new ItemCarrinho(novoCodItem, produto, quantidade);
        carrinho.itens.push(novoItem);
      }

      return NextResponse.json(carrinho);
    } catch (error) {
      console.error("Erro em adicionarItem:", error);
      return NextResponse.json({ message: "Erro ao adicionar item" }, { status: 500 });
    }
  }

  async atualizarItem(req: NextRequest) {
    try {
      const body = await req.json();
      const { codICarrinho, novaQuantidade } = body; 

      if (codICarrinho === undefined || novaQuantidade === undefined) {
        return NextResponse.json({ message: "Dados incompletos" }, { status: 400 });
      }

      const carrinho = getCarrinhoByClienteId(codClienteFixo);
      const item = carrinho.itens.find(i => i.codICarrinho === codICarrinho); 

      if (novaQuantidade <= 0) {
        carrinho.itens = carrinho.itens.filter(i => i.codICarrinho !== codICarrinho); 
      } else if (item) {
        item.quantidade = novaQuantidade;
      } else {
        return NextResponse.json({ message: "Item não encontrado" }, { status: 404 });
      }

      return NextResponse.json(carrinho);
    } catch (error) {
      console.error("Erro em atualizarItem:", error);
      return NextResponse.json({ message: "Erro ao atualizar item" }, { status: 500 });
    }
  }

  async removerItem(req: NextRequest) {
    try {
      const body = await req.json();
      const { codICarrinho } = body; 

      if (!codICarrinho) {
        return NextResponse.json({ message: "Dados incompletos" }, { status: 400 });
      }

      const carrinho = getCarrinhoByClienteId(codClienteFixo);
      const totalItensAntes = carrinho.itens.length;
      
      carrinho.itens = carrinho.itens.filter(i => i.codICarrinho !== codICarrinho); 

      if (carrinho.itens.length === totalItensAntes) {
        return NextResponse.json({ message: "Item não encontrado no carrinho" }, { status: 404 });
      }

      return NextResponse.json(carrinho);
    } catch (error) {
      console.error("Erro em removerItem:", error);
      return NextResponse.json({ message: "Erro ao remover item" }, { status: 500 });
    }
  }
}

const carrinhoController = new CarrinhoController();
export default carrinhoController;