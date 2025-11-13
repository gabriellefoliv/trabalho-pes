import { NextRequest } from "next/server";
import carrinhoController from "@/app/api/controllers/carrinhoController";

export async function GET(req: NextRequest) {
  return carrinhoController.buscarItens(req);
}

export async function POST(req: NextRequest) {
  return carrinhoController.adicionarItem(req);
}

export async function PUT(req: NextRequest) {
  return carrinhoController.atualizarItem(req);
}

export async function DELETE(req: NextRequest) {
  return carrinhoController.removerItem(req);
}