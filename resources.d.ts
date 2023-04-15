type User = {
  id: number;
  name: string;
  email: string;
  favorites: Favorites[];
};

type Favorites = {
  id: number;
  user_id: number;
  user: User;
  artwork_id: number;
  artwork: Artwork;
};

type Artwork = {
  id: number;
  title: string;
  artist: string;
  image_url: string;
};
