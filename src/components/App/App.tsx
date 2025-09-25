import { TonConnectUIProvider } from "@tonconnect/ui-react";
import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../Router/Router";

function App() {
  useEffect(() => {
    WebApp.ready();

    WebApp.expand();

    console.log("User:", WebApp.initDataUnsafe?.user?.username);
    console.log("Start Param:", WebApp.initDataUnsafe?.start_param);
  }, []);

  // const handleClose = () => {
  //   WebApp.close();
  // };

  return (
    <>
      <BrowserRouter>
        <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
          {WebApp.initDataUnsafe?.user?.username}
          <Router />
        </TonConnectUIProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
