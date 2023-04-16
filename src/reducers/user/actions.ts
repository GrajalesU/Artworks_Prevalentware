import {
  ADD_FAVORITE,
  LOG_IN,
  LOG_OUT,
  REMOVE_FAVORITE,
  SIGN_UP,
} from "./types";

type SignUpAction = {
  type: typeof SIGN_UP;
  payload: User;
};

export function signUp(user: User): SignUpAction {
  return {
    type: SIGN_UP,
    payload: user,
  };
}

type LogInAction = {
  type: typeof LOG_IN;
  payload: User;
};

export function logIn(user: User): LogInAction {
  return {
    type: LOG_IN,
    payload: user,
  };
}

type LogOutAction = {
  type: typeof LOG_OUT;
};

export function logOut(): LogOutAction {
  return {
    type: LOG_OUT,
  };
}

type AddFavoriteAction = {
  type: typeof ADD_FAVORITE;
  payload: Artwork;
};

export function addFavorite(artwork: Artwork): AddFavoriteAction {
  return {
    type: ADD_FAVORITE,
    payload: artwork,
  };
}

type RemoveFavoriteAction = {
  type: typeof REMOVE_FAVORITE;
  payload: number;
};

export function removeFavorite(id: number): RemoveFavoriteAction {
  return {
    type: REMOVE_FAVORITE,
    payload: id,
  };
}

export type UserAction =
  | SignUpAction
  | LogInAction
  | LogOutAction
  | AddFavoriteAction
  | RemoveFavoriteAction;
  