import {
  UserState,
  initialUserState,
  userReducer,
  UserAction,
  logIn,
  signUp,
  logOut,
  addFavorite,
  removeFavorite,
} from "@/reducers/user";
import { ReactNode, createContext, useContext, useReducer } from "react";

interface UserContextProps {
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const useUserContext = () => {
  const { state, dispatch } = useContext(UserContext);

  const userSignUp = (user: User) => {
    dispatch(signUp(user));
  };

  const userLogin = (user: User) => {
    dispatch(logIn(user));
  };

  const userLogout = () => {
    dispatch(logOut());
  };

  const userAddFavorite = (artwork: Artwork) => {
    dispatch(addFavorite(artwork));
  };

  const userRemoveFavorite = (id: number) => {
    dispatch(removeFavorite(id));
  };

  return {
    user: state?.user,
    userSignUp,
    userLogin,
    userLogout,
    userAddFavorite,
    userRemoveFavorite,
  };
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
