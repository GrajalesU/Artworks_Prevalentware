import { PrismaClient } from "@prisma/client";
import { AuthenticatedNextApiHandler } from "../../../../api/middleware/auth/types";
import authMiddleware from "../../../../api/middleware/auth";

const prisma = new PrismaClient();

const favorites: AuthenticatedNextApiHandler = async (request, response) => {
  if (!request.user) {
    response.status(401).end();
    return;
  }

  switch (request.method) {
    case "POST":
      const newFavorite = await prisma.favorites.create({
        data: {
          user_id: request.user.id,
          artwork_id: Number(request.body.artwork_id),
        },
      });
      response.status(201).json(newFavorite);
      break;
    case "DELETE":
      const deletedFavorite = await prisma.favorites.delete({
        where: {
          id: Number(request.query.id),
        },
      });
      response.status(200).json(deletedFavorite);
      break;
    default:
      response.status(405).end();
      break;
  }
};

export default authMiddleware(favorites);
