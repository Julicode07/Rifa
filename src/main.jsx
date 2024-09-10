import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { RifaProvider } from "./context/RifaContext";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <RifaProvider>
      <App />
    </RifaProvider>
  );
}
