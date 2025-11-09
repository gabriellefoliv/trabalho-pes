"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import Image from "next/image";

export function CartPopover() { 
  const {
    cartItems,
    cartTotal,
    totalItems,
    isLoading,
    updateQuantity,
  } = useCart();

  const corPrincipal = "text-red-600";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`relative text-red-500 hover:text-red-600 ${corPrincipal}`}
          disabled={isLoading}
        >
          <ShoppingCart />
          {!isLoading && totalItems > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
              {totalItems}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      
      <PopoverContent align="end" className="w-96 p-4">
        <div className="mb-4">
          <h3 className={`text-2xl font-bold ${corPrincipal}`}>
            Meu Carrinho
          </h3>
        </div>

        <div className="max-h-64 overflow-y-auto pr-2">
          {isLoading && <p>Carregando...</p>}

          {!isLoading && cartItems.length === 0 && (
            <p className="text-gray-500 text-center my-10">
              Seu carrinho está vazio.
            </p>
          )}

          {cartItems.map((item) => (
            <div
              key={item.codICarrinho}
              className="flex items-center justify-between gap-2 py-4 border-b"
            >
              <Image
                src={item.produto.imagem}
                alt={item.produto.nome}
                width={56} 
                height={56}
                className="rounded-md object-cover"
              />

              <div className="flex-1 mx-2">
                <h4 className={`font-bold ${corPrincipal}`}>
                  {item.produto.nome}
                </h4>
                <p className="text-sm text-gray-500">
                  R$ {item.precoUnitario.toFixed(2)}
                </p>
              </div>

              <div className="flex items-center border border-gray-300 rounded-full">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-8 w-8 text-gray-700"
                  onClick={() =>
                    updateQuantity(item.codICarrinho, item.quantidade - 1)
                  }
                >
                  <Minus size={16} />
                </Button>
                <span className="px-2 text-sm font-medium text-gray-800">
                  {item.quantidade}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-8 w-8 text-gray-700"
                  onClick={() =>
                    updateQuantity(item.codICarrinho, item.quantidade + 1)
                  }
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {cartItems.length > 0 && (
          <div className="mt-6 border-t pt-6">
            <h3 className={`text-xl font-bold ${corPrincipal}`}>
              VALOR TOTAL: R$ {cartTotal.toFixed(2)}
            </h3>
            <Button className="w-full bg-red-600 hover:bg-red-700 mt-4">
              Efetuar Pedido
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}