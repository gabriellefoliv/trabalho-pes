

export function Footer() {
    return (
        <footer className="bg-red-500 text-white py-3 mt-10">
            <div className="container mx-auto text-center flex flex-col gap-2">
                <p>&copy; {new Date().getFullYear()} Chega de Miojo. Todos os direitos reservados.</p>
                <p>Desenvolvido por Carlos Kamay, Gabrielle Oliveira e Lidia Nunes para Princípios de Engenharia de Software em 2025-2</p>
            </div>
        </footer>
    )
}