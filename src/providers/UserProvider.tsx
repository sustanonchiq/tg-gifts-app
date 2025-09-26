import {
  createContext,
  useEffect,
  useState,
  type FC,
  type ReactNode,
} from "react";
import type { UserT } from "../shared/utils/types";
import WebApp from "@twa-dev/sdk";

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserT>({} as UserT);

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserT>({} as UserT);

  useEffect(() => {
    WebApp.ready();
    WebApp.expand();

    setUser(WebApp.initDataUnsafe?.user);
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
