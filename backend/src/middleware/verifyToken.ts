const jwt = require("jsonwebtoken");
import { Request, Response, NextFunction } from "express";

export type AuthenticatedRequest = Request & {
  tkUser: {
    id: string;
    email: string;
    isTrainer: boolean;
    iat: number;
  };
};

export const verifyToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403);
      req.tkUser = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
};

module.exports = { verifyToken };
