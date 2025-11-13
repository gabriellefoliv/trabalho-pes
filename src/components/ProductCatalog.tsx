'use client'

import Image from "next/image";
import loadedProdutos from "@/services/loaded/produtos";
import { Button } from "./ui/button";
import { Clock, MapPin, ShoppingCart } from "lucide-react";
import { Card, CardTitle } from "./ui/card";
import { useMemo, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { useCart } from "@/contexts/CartContext";

interface Product {
  codProduto: number;
  imagem: string;
  nome: string;
  descricao: string;
  restaurante: {
    nome: string;
  };
  preco: number;
  tempoPreparo: number;
  categoria: {
    nome: string;
  }; 
}

export function ProductCatalog() {
    const [selectedRestaurant, setSelectedRestaurant] = useState<string>("all");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [sortByPrice, setSortByPrice] = useState<string>("default");

    const { addToCart } = useCart()

    const restaurants = useMemo(
        () => [
        ...new Set(loadedProdutos.map((prod) => prod.restaurante.nome)),
        ],
        []
    );

    const categories = useMemo(
        () => [...new Set(loadedProdutos.map((prod: Product) => prod.categoria.nome))],
        []
    );

    const filteredAndSortedProducts = useMemo(() => {
        let products: Product[] = [...loadedProdutos];

        if (selectedRestaurant !== "all") {
        products = products.filter(
            (prod) => prod.restaurante.nome === selectedRestaurant
        );
        }

        if (selectedCategory !== "all") {
        products = products.filter(
            (prod) => prod.categoria.nome === selectedCategory
        );
        }

        if (sortByPrice === "asc") {
        products.sort((a, b) => a.preco - b.preco);
        } else if (sortByPrice === "desc") {
        products.sort((a, b) => b.preco - a.preco); 
        }

        return products;
    }, [selectedRestaurant, selectedCategory, sortByPrice]); 

    return (
    <div className="flex w-full flex-col mt-6">
      <h1 className="text-red-500 font-bold text-2xl md:text-4xl text-center">
        NOSSO CARDÁPIO
      </h1>

      <div className="flex flex-col md:flex-row gap-4 justify-center mt-8 px-4">
        <Select
          value={selectedRestaurant}
          onValueChange={setSelectedRestaurant}
        >
          <SelectTrigger className="w-full md:w-[280px]">
            <SelectValue placeholder="Filtrar por restaurante" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Restaurantes</SelectLabel>
              <SelectItem value="all">Todos os Restaurantes</SelectItem>
              {restaurants.map((name) => (
                <SelectItem key={name} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-[280px]">
            <SelectValue placeholder="Filtrar por categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categorias</SelectLabel>
              <SelectItem value="all">Todas as Categorias</SelectItem>
              {categories.map((name) => (
                <SelectItem key={name} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={sortByPrice} onValueChange={setSortByPrice}>
          <SelectTrigger className="w-full md:w-[280px]">
            <SelectValue placeholder="Ordenar por preço" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Ordenar por Preço</SelectLabel>
              <SelectItem value="default">Qualquer preço</SelectItem>
              <SelectItem value="desc">Do mais caro</SelectItem>
              <SelectItem value="asc">Do mais barato</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap justify-center mt-10 gap-y-10 gap-x-5">
        
        {filteredAndSortedProducts.length === 0 && (
          <p className="text-gray-500 text-lg mt-10">
            Nenhum produto encontrado com esses filtros.
          </p>
        )}

        {filteredAndSortedProducts.map((prod) => (
          <Card
            key={prod.codProduto}
            className="relative w-72 h-96 gap-5 p-4 flex items-center" 
          >
            <div className="absolute top-4 left-4 bg-red-500 rounded-full text-sm text-white items-start justify-start p-1 font-semibold">
              <span>{prod.categoria.nome}</span>
            </div>
            <Image
              src={prod.imagem}
              width={150}
              height={150}
              alt={prod.nome}
              className="w-36 h-36 object-cover rounded-lg items-center"
            />
            <div className="flex-1 space-y-1 items-center">
              <CardTitle className="text-2xl font-bold text-red-500 text-center">
                {prod.nome}
              </CardTitle>
              <p className="text-gray-600 mt-2">{prod.descricao}</p>

              <div className="flex items-center gap-1 text-sm mt-2">
                <MapPin className=" text-red-500" size={16} />
                <p>{prod.restaurante.nome}</p>
              </div>

              <div className="flex justify-between">
                <p className="text-red-500 font-bold">
                  R$ {prod.preco.toFixed(2)}
                </p>
                <div className="flex">
                  <Clock
                    className="inline-block mr-1 text-gray-500"
                    size={16}
                  />
                  <span className="text-gray-500 text-sm">
                    {prod.tempoPreparo} min
                  </span>
                </div>
              </div>

              <Button onClick={() => addToCart(prod)} className="flex w-full text-white p-2 bg-red-500 hover:bg-red-600">
                <ShoppingCart className="mr-2" />
                Adicionar ao carrinho
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
