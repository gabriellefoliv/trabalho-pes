import Image from "next/image";
import loadedProducts from "@/services/loaded/products";
import { Button } from "./ui/button";
import { Clock, MapPin, ShoppingCart } from "lucide-react";
import { Card, CardTitle } from "./ui/card";

export function ProductCatalog() {
    return (
        <div className="flex flex-col w-full mt-6">
            <h1 className="text-red-500 font-bold text-2xl md:text-4xl text-center">
                NOSSO CARDÁPIO
            </h1>
            <div className="flex flex-wrap space-x-5 justify-center mt-10 gap-y-10">
                {loadedProducts.map((prod) => (
                    <Card key={prod.codProduto} className="w-72 h-96 gap-5 p-4 flex items-center">
                        <Image
                            src={prod.imagem}
                            width={150}
                            height={150}
                            alt={prod.nome}
                            className="w-36 h-36 object-cover rounded-lg"
                        />
                        <div className="flex-1 space-y-1">
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
                                    <Clock className="inline-block mr-1 text-gray-500" size={16} />
                                    <span className="text-gray-500 text-sm">
                                        {prod.tempoPreparo} min
                                    </span>
                                </div>
                            </div>

                            <Button className="flex w-full text-white p-2 bg-red-500 hover:bg-red-600">
                                <ShoppingCart className="mr-2" />
                                Adicionar ao carrinho
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
