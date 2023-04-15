import type { NextApiHandler } from "next";
import { PrismaClient } from "@prisma/client";
import jwt, { Secret } from "jsonwebtoken";

const prisma = new PrismaClient();

const signIn: NextApiHandler<Secret> = async (request, response) => {
  if (request.method !== "POST") {
    return response.status(405).end();
  }

  const user = await prisma.user.findUnique({
    where: {
      email: request.body.email,
    },
  });

  if (user) {
    return response.status(409).end();
  }

  const newUser = await prisma.user.create({
    data: {
      email: request.body.email,
      name: request.body.name,
    },
  });

  const token = jwt.sign(
    {
      id: newUser.id,
    },
    process.env.AUTH_JWT_SECRET as Secret,
    {
      expiresIn: "1d",
    }
  );

  return response.status(201).json(token);
};

export default signIn;
