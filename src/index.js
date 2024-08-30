import React from "react";
import ReactDOM from "react-dom/client";

import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import "../node_modules/jquery/dist/jquery";
import "../node_modules/popper.js/dist/popper";
import "../node_modules/bootstrap/dist/js/bootstrap";

import App from "./App";
import { ArticleProvider } from "./context/ArticleProvider";
import { BodyProvider } from "./context/BodyProvider";
import { OtherArticlesProvider } from "./context/OtherArticlesProvider";
import { AuthProvider } from "./context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ArticleProvider>
        <OtherArticlesProvider>
          <BodyProvider>
            <App />
          </BodyProvider>
        </OtherArticlesProvider>
      </ArticleProvider>
    </AuthProvider>
  </React.StrictMode>
);
