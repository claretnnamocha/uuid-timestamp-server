import { Router } from "express";
import { app } from "../controllers";

const routes = Router();
routes.get("/log", app.log);

export default routes;
