import { Request, Response } from "express";

export default [
  {
    path: "/",
    method: "get",
    handler: async (_req: Request, res: Response) => {
      res.send({message: "Hello world!"});
    }
  }
];