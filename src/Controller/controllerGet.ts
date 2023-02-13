import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ControllerGet {
  public async get(req: Request, res: Response) {
    const user = await prisma.user.findMany();
    return res.json(user);
  }
}

export const controllerGet = new ControllerGet();
