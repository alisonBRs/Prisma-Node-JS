import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ControllerDelete {
  public async delete(req: Request, res: Response) {
    const id = Number(req.params.id);

    await prisma.user.delete({
      where: {
        id: id,
      },
    });

    res.json({ message: "Usuário deletado com sucesso" });
  }
}

export const controllerDelete = new ControllerDelete();
