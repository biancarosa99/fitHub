import { Request, Response, Router } from "express";
import User from "../entities/User";
import { myDataSource } from "../app-data-source";
import { AuthenticatedRequest } from "../middleware/verifyToken";

export const getUser = async (req: AuthenticatedRequest, res: Response) => {
  const { tkUser } = req;
  console.log(tkUser);
  try {
    const user = await myDataSource.getRepository(User).findOne({
      where: {
        id: tkUser.id,
      },
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
