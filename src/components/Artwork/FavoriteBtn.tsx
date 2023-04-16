import Image from "next/image";
import React, { useState } from "react";

interface FavoriteBtnProps {
  artwork?: Artwork;
}

export default function FavoriteBtn({ artwork }: FavoriteBtnProps) {
  const [isFav, setIsFav] = useState(false);

  const handleClick = () => {
    setIsFav(!isFav);
    //TODO: Add to favorites (context and backend)
  };

  if (isFav)
    return (
      <button onClick={handleClick}>
        <Image src="/fav.png" alt="Favorite" width={24} height={24} />
      </button>
    );

  return (
    <button onClick={handleClick}>
      <Image src="/border_fav.png" alt="Favorite" width={24} height={24} />
    </button>
  );
}
