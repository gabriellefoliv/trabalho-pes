import { pedidosController } from "../../controllers/pedidoController";

export async function POST(req: Request) {
    return pedidosController.efetuarPedido(req);
}