import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";


export function Navbar() {
    return (
        <nav className="bg-white p-4 flex">
            <h1 className="text-2xl font-bold text-red-500 flex-1">CHEGA DE MIOJO</h1>
            <Button className="bg-white hover:bg-red-500 hover:text-white">
                <ShoppingCart className="text-red-500 hover:text-white" />
            </Button>
        </nav>
    )
}