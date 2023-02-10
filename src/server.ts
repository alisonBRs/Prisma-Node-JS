import express from "express";
import { router } from "./routes";

const port = 8085;

class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware() {
    this.server.use(express.json());
  }

  private router() {
    this.server.use(router);
  }
}

new App().server.listen(port, () =>
  console.log(`app running at port: localhost:${port}`)
);
