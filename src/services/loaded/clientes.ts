import Cliente from "@/app/api/models/cliente";

export const codClienteFixo = 1;

const data = [
    new Cliente(
        codClienteFixo,
        'João Silva',
        'Rua A, 123'
    )
]

const loadedClientes: Cliente[] = data;

export default loadedClientes;