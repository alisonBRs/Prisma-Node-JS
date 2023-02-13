import { Router } from "express";
import { controllerGet } from "./Controller/controllerGet";
import { controllerPost } from "./Controller/controllerPost";
import { controllerDelete } from "./Controller/controllerDelete";
import { controllerPatch } from "./Controller/controllerPatch";

export interface CreateBody {
  name: string;
  email: string;
  age: number;
}

const router: Router = Router();

router.get("/", controllerGet.get);

router.post("/user", controllerPost.post);

router.delete("/delete/:id", controllerDelete.delete);

router.patch("/update/:id", controllerPatch.patch);

export { router };
