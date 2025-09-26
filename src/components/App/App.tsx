import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { BrowserRouter } from "react-router-dom";
import Router from "../Router/Router";
import UserProvider from "../../providers/UserProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <TonConnectUIProvider manifestUrl="https://tg-gifts-app.vercel.app/tonconnect-manifest.json">
            <Router />
          </TonConnectUIProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
