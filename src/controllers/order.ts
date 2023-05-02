import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/req-ext";

const getItem = async (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "session jwt ok",
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

export { getItem };
