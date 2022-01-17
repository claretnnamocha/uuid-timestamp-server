import { Response, Router } from "express";
import app from "./app";

const routes = Router();

routes.use("", app);

routes.use((_, res: Response) => {
  res.send({ status: false, message: "Route not found" });
});

export default routes;
