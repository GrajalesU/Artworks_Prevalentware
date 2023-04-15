import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import type { NextApiHandler } from "next";
import { AuthenticatedNextApiHandler } from "./types";

const prisma = new PrismaClient();

const authMiddleware =
  (handler: NextApiHandler): AuthenticatedNextApiHandler =>
  async (req, res) => {
    try {
      // Verificar que el token exista en el encabezado de la solicitud
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        throw new Error("No se proporcionó un token de autenticación.");
      }

      // Extraer el token de autorización del encabezado de la solicitud y verificar que sea válido
      const token = authHeader.replace("Bearer ", "");
      const decodedToken = jwt.verify(
        token,
        process.env.AUTH_JWT_SECRET as string
      );

      if (typeof decodedToken !== "object") {
        throw new Error("El token de autenticación no es válido.");
      }

      const user = await prisma.user.findUnique({
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
      }) as User;

      if (!user) {
        throw new Error(
          "No se pudo encontrar el usuario correspondiente al token de autenticación."
        );
      }

      // Agregar el usuario al objeto de solicitud (request) para su uso posterior
      req.user = user;

      // Continuar con el controlador de la solicitud
      return handler(req, res);
    } catch (error) {
      // Manejar errores de autenticación
      console.error(error);
      res.status(401).json({ message: "No se pudo autenticar al usuario." });
    }
  };

export default authMiddleware;
