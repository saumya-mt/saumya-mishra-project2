import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SudokuProvider } from "./context/SudokuContext";
import "./styles.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SudokuProvider>
        <App />
      </SudokuProvider>
    </BrowserRouter>
  </React.StrictMode>
);
