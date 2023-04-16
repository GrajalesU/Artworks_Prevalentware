import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";

const prisma = new PrismaClient();

const artwork: NextApiHandler<Artwork> = async (request, response) => {
  if (request.method !== "POST") {
    response.status(405).end();
    return;
  }

  const currentArtworks = await prisma.artwork.findMany();
  const sameArtwork = currentArtworks.find(
    (artwork) => artwork.title === request.body.title
  );

  if (sameArtwork) {
    response.status(200).json(sameArtwork);
    return;
  }

  const newArtwork = await prisma.artwork.create({
    data: {
      title: request.body.title,
      artist: request.body.artist,
      image_url: request.body.image_url,
      link: request.body.link,
    },
  });

  response.status(201).json(newArtwork);
};

export default artwork;
