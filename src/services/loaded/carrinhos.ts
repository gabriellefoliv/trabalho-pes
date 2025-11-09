import Carrinho from '@/app/api/models/carrinho';
import loadedClientes from './clientes';

const loadedCarrinhos: Carrinho[] = [
];

export function getCarrinhoByClienteId(codCliente: number): Carrinho {
  let carrinho = loadedCarrinhos.find(c => c.cliente.codCliente === codCliente);

  if (!carrinho) {
    const cliente = loadedClientes.find(c => c.codCliente === codCliente);
    if (!cliente) {
      throw new Error("Cliente não encontrado");
    }
    const novoCodCarrinho = loadedCarrinhos.length + 1;
    carrinho = new Carrinho(novoCodCarrinho, cliente);
    loadedCarrinhos.push(carrinho);
  }

  return carrinho;
}

export default loadedCarrinhos;