import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import App from "./App";

import { AuthenticationProvider } from "./contexts/AuthenticationContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { BagProvider } from "./contexts/BagContext";
import { WishlistProvider } from "./contexts/WishlistContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <LanguageProvider>
        <AuthenticationProvider>
          <WishlistProvider>
            <BagProvider>
              <App />
            </BagProvider>
          </WishlistProvider>
        </AuthenticationProvider>
      </LanguageProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
