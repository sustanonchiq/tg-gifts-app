import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { BrowserRouter } from "react-router-dom";
import Router from "../Router/Router";
import UserProvider from "../../providers/UserProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <TonConnectUIProvider manifestUrl="https://tg-gifts-app.vercel.app/tonconnect-manifest.json">
          <UserProvider>
            <Router />
          </UserProvider>
        </TonConnectUIProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
