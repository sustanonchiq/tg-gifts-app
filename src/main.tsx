import "@fontsource/nunito-sans";
import "@fontsource/nunito-sans/700";
import "@fontsource/nunito-sans/500";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App.tsx";

import "./styles/globals.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
