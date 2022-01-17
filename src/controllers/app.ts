import { app } from "../services";
import { Response, Request } from "express";

export const log = async (_: Request, res: Response) => {
  return res.send(await app.log());
};
