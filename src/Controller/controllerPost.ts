import { Response, Request } from "express";
import { CreateBody } from "../routes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ControllerPost {
  public async post(req: Request, res: Response) {
    const { name, email, age }: CreateBody = req.body;

    const alreadyExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (alreadyExist) {
      return res
        .status(400)
        .json({ message: "Já existe um usuário com esse email." });
    }
    await prisma.user.create({
      data: {
        name: name.toLowerCase(),
        email: email.toLocaleLowerCase(),
        age,
      },
    });

    return res.json({ message: "Usuário criado com sucesso!" });
  }
}

export const controllerPost = new ControllerPost();
