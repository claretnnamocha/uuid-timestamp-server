import { Response } from "express";
import { CustomRequest } from "../types/controllers";

export const controller =
  (fn: Function) => async (req: CustomRequest, res: Response) => {
    try {
      const data = await fn(req);

      return res.send(data);
    } catch (e) {
      return res.send({ status: false, message: "Internal server error" });
    }
  };
