import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FC,
  type ReactNode,
} from "react";
import type { UserT } from "../shared/utils/types";
import WebApp from "@twa-dev/sdk";
import { useTonAddress } from "@tonconnect/ui-react";
import { getTonBalance } from "../shared/utils/getTonBalance";

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserT>({} as UserT);

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserT>({
    balance: 0,
  } as UserT);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    WebApp.ready();
    WebApp.expand();

    const userData = {
      ...WebApp.initDataUnsafe?.user,
      balance: 0,
    };

    setUser(userData);
    setIsLoading(userData.id ? false : true);
  }, []);

  const wallet = useTonAddress();

  useEffect(() => {
    if (wallet) {
      (async () => {
        await getTonBalance(wallet).then((balance) => {
          setUser((prev) => ({
            ...prev,
            balance,
          }));
        });
      })();
    }
  }, [wallet]);

  return isLoading ? (
    "Loading..."
  ) : (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  return useContext(UserContext);
}

export default UserProvider;
