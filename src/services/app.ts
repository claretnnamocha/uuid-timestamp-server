import { v4 as uuid } from "uuid";
import { Log } from "../models";
import { others as service } from "../types/services";

/**
 * Get logs
 */
export const log = async () => {
  try {
    await Log.create({ id: uuid() });

    const logs: Array<any> = await Log.findAll({
      order: [["createdAt", "DESC"]],
    });

    let data = {};

    logs.map((log) => {
      data[new Date(log.createdAt).toISOString()] = log.id;
    });

    return data;
  } catch (error) {
    return {
      status: false,
      message: "Error trying to get logs",
    };
  }
};
