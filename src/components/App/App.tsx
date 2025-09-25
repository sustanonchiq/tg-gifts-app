import { TonConnectUIProvider } from "@tonconnect/ui-react";
import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../Router/Router";

type User = typeof WebApp.initDataUnsafe.user;

function App() {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    WebApp.ready();

    WebApp.expand();

    setUser(WebApp.initDataUnsafe?.user);
  }, []);

  // const handleClose = () => {
  //   WebApp.close();
  // };

  return (
    <>
      <BrowserRouter>
        <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
          {user?.username}
          <Router />
        </TonConnectUIProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
