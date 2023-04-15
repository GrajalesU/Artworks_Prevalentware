import type { NextApiHandler } from "next";
import { PrismaClient } from "@prisma/client";
import jwt, { Secret } from "jsonwebtoken";

const prisma = new PrismaClient();

const login: NextApiHandler<Secret> = async (request, response) => {
  if (request.method !== "POST") {
    response.status(405).end();
    return;
  }

  if (request.body.password === process.env.AUTH_ARTWORK_LOVER_PASSWORD) {
    const user = (await prisma.user.findUnique({
      where: {
        email: request.body.email,
      },
    })) as User;

    if (user) {
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.AUTH_JWT_SECRET as Secret,
        {
          expiresIn: "1d",
        }
      );
      response.status(200).json(token);
    } else {
      response.status(401).end();
    }
  }

  response.status(401).end();
};

export default login;
