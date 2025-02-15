import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/product_context.tsx";
import { SearchProvider } from "./context/search_context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <SearchProvider>
        <App />
        </SearchProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
