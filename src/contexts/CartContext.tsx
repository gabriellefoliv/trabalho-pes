"use client";

import React, { 
  createContext, 
  useContext, 
  useState, 
  ReactNode, 
  useEffect 
} from "react";

interface Product {
  codProduto: number;
  nome: string;
  imagem: string;
  descricao: string;
  preco: number;
}

interface CartItem {
  codICarrinho: number;
  produto: Product;
  quantidade: number;
  precoUnitario: number;
}

interface CartAPIResponse {
  codCarrinho: number;
  itens: CartItem[];
}

interface CartContextType {
  cartItems: CartItem[];
  isLoading: boolean;
  addToCart: (product: Product) => Promise<void>;
  updateQuantity: (codICarrinho: number, novaQuantidade: number) => Promise<void>;
  removeFromCart: (codICarrinho: number) => Promise<void>;
  cartTotal: number;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/routes/carrinho');
        if (!response.ok) throw new Error("Falha ao buscar carrinho");
        
        const data: CartAPIResponse = await response.json();
        setCartItems(data.itens || []);
      } catch (error) {
        console.error("Erro ao carregar carrinho:", error);
        setCartItems([]); 
      } finally {
        setIsLoading(false);
      }
    };
    fetchCart();
  }, []);

  const addToCart = async (product: Product) => {
    try {
      const response = await fetch('/api/routes/carrinho', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          codProduto: product.codProduto, 
          quantidade: 1 
        }),
      });
      if (!response.ok) throw new Error("Falha ao adicionar item");

      const data: CartAPIResponse = await response.json();
      setCartItems(data.itens); 
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error);
    }
  };

  const updateQuantity = async (codICarrinho: number, novaQuantidade: number) => {
    if (novaQuantidade <= 0) {
      await removeFromCart(codICarrinho);
      return;
    }
    
    try {
      const response = await fetch('/api/routes/carrinho', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ codICarrinho, novaQuantidade }),
      });
      if (!response.ok) throw new Error("Falha ao atualizar quantidade");

      const data: CartAPIResponse = await response.json();
      setCartItems(data.itens);
    } catch (error) {
      console.error("Erro ao atualizar quantidade:", error);
    }
  };

  const removeFromCart = async (codICarrinho: number) => {
    try {
      const response = await fetch('/api/routes/carrinho', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ codICarrinho }),
      });
      if (!response.ok) throw new Error("Falha ao remover item");
      
      const data: CartAPIResponse = await response.json();
      setCartItems(data.itens);
    } catch (error) {
      console.error("Erro ao remover item:", error);
    }
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantidade, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + (item.precoUnitario * item.quantidade), 0);

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        isLoading, 
        addToCart, 
        updateQuantity, 
        removeFromCart,
        cartTotal,
        totalItems 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};