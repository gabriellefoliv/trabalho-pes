'use client'

import { useCart } from "@/contexts/CartContext";
import { CartPopover } from "./Cart";


export function Navbar() {
    const { totalItems, isLoading } = useCart();

    return (
        <nav className="bg-white p-4 flex">
            <h1 className="text-2xl font-bold text-red-500 flex-1">CHEGA DE MIOJO</h1>
            <CartPopover/>
                
        </nav>
    )
}