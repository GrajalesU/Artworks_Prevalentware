import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import type { NextApiHandler } from "next";
import { AuthenticatedNextApiHandler } from "./types";

const prisma = new PrismaClient();

const authMiddleware =
  (handler: NextApiHandler): AuthenticatedNextApiHandler =>
  async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        throw new Error("Auth token not found");
      }

      const token = authHeader.replace("Bearer ", "");
      const decodedToken = jwt.verify(
        token,
        process.env.AUTH_JWT_SECRET as string
      );

      if (typeof decodedToken !== "object") {
        throw new Error("Invalid token");
      }

      const user = (await prisma.user.findUnique({
        where: {
          id: Number(decodedToken.id),
        },
        include: {
          favorites: {
            include: {
              artwork: true,
            },
          },
        },
      })) as User;

      if (!user) {
        throw new Error(
          "User not found. This should not happen. Please contact the administrator."
        );
      }

      req.user = user;

      return handler(req, res);
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "The user could not be authenticated" });
    }
  };

export default authMiddleware;
