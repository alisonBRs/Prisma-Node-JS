import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { dataGet } from "./Controller/controllerGet";
import { controllerPost } from "./Controller/controllerPost";

export interface CreateBody {
  name: string;
  email: string;
  age: number;
}

const prisma = new PrismaClient();

const router: Router = Router();

router.get("/", dataGet.home);

router.post("/user", controllerPost.post);

router.delete("/delete/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  await prisma.user.delete({
    where: {
      id: id,
    },
  });

  res.json({ message: "Usuário deletado com sucesso" });
});

router.patch("/update/:id", async (req: Request, res: Response) => {
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
});

export { router };
