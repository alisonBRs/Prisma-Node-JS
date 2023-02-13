import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class ControllerPatch {
  public async patch(req: Request, res: Response) {
    let body = req.body;
    const id = Number(req.params.id);

    await prisma.user.update({
      where: {
        id: id,
      },

      data: {
        name: body.name.toLowerCase(),
        email: body.email.toLowerCase(),
        age: body.age,
      },
    });
    res.json({ message: "Usuário atualizado com sucesso!" });
  }
}

export const controllerPatch = new ControllerPatch();
