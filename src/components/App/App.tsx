import { TonConnectUIProvider } from "@tonconnect/ui-react";
import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../Router/Router";

function App() {
  useEffect(() => {
    // Готовим приложение к отображению
    WebApp.ready();

    // Расширяем на весь экран (опционально)
    WebApp.expand();

    // Можно получить данные о пользователе
    console.log("User:", WebApp.initDataUnsafe?.user);
    console.log("Start Param:", WebApp.initDataUnsafe?.start_param);
  }, []);

  // const handleClose = () => {
  //   WebApp.close();
  // };

  return (
    <>
      <BrowserRouter>
        <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
          <Router />
        </TonConnectUIProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
