import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class DataGet {
  public async home(req: Request, res: Response) {
    const user = await prisma.user.findMany();
    return res.json(user);
  }
}

export const dataGet = new DataGet();
