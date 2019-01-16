import { Request, Response } from "express";
import { getPlacesByName } from './SearchController';
export default [
  {
    path: "/",
    method: "get",
    handler: async (_req: Request, res: Response) => {
      res.send({message: "Hello world!"});
    }
  },
  {
    path: "/api/v1/search",
    method: "get",
    handler: [
      async ({ query }: Request, res: Response) => {
        const result = await getPlacesByName(query.q);
        res.status(200).send(result);
      }
    ]
  }
];