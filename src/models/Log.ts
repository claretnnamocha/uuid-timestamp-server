import { DataTypes } from "sequelize";
import { db } from "../configs/db";

const Log = db.define(
  "log",
  {
    id: { type: DataTypes.UUID, primaryKey: true },
  },
  { timestamps: true, tableName: "log" }
);

Log.prototype.transform = function () {
  let data = this.dataValues;

  delete data.password;
  return data;
};

export { Log };
