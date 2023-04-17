import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

const getItem = async (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "esto solo lo ves con sesion jwt",
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

export { getItem };
