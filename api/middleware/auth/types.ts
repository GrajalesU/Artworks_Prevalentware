import { NextApiRequest, NextApiResponse } from "next";

export interface AuthenticatedRequest extends NextApiRequest {
  user?: User;
}

export interface AuthenticatedNextApiHandler {
  (request: AuthenticatedRequest, response: NextApiResponse): Promise<unknown>;
}
