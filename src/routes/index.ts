import { Response, Router } from "express";
import { response } from "../helpers";
import app from "./app";

const routes = Router();

routes.use("", app);

routes.use((_, res: Response) => {
  response(res, { status: false, message: "Route not found" }, 404);
});

export default routes;
