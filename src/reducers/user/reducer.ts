import { UserAction } from "./actions";

export interface UserState {
  user: User | null;
}

export const initialUserState: UserState = {
  user: null,
};

export function userReducer(
  state: UserState = initialUserState,
  action: UserAction
) {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        user: action.payload,
      };
    case "LOG_IN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOG_OUT":
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }

      return {
        ...state,
        user: null,
      };
    case "ADD_FAVORITE":
      if (!state.user) return state;
      return {
        ...state,
        user: {
          ...state.user,
          favorites: [
            ...state.user.favorites,
            {
              id: action.payload.id,
              artwork_id: action.payload.id,
              artwork: action.payload,
              user_id: state.user.id,
              user: state.user,
            },
          ],
        },
      };
    case "REMOVE_FAVORITE":
      if (!state.user) return state;
      return {
        ...state,
        user: {
          ...state.user,
          favorites: state.user.favorites.filter(
            (favorite) => favorite.artwork_id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
}
