import Image from "next/image";
import React from "react";
import FavoriteBtn from "./FavoriteBtn";

interface ArtWorkCardProps {
  artwork: Artwork;
}

export default function ArtworkCard({ artwork }: ArtWorkCardProps) {
  return (
    <div className="relative block max-w-sm mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg sm:mx-0 min-w-[350px] sm:min-w-fit h-44 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <Image
        className="absolute object-cover w-full h-full"
        src={artwork.image_url}
        width={365}
        height={175}
        alt="Artwork element"
        loading="lazy"
      />
      <div className="absolute bottom-0 z-10 w-full p-3">
        <div>
          <a
            href={artwork.link}
            target="_blank"
            rel="noreferrer"
            className="mb-1 text-2xl font-bold tracking-tight text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          >
            {artwork.title}
          </a>
          <div className="flex items-end justify-between ">
            <h4 className="font-semibold text-gray-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {artwork.artist}
            </h4>
            <FavoriteBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
