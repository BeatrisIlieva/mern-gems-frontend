import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import App from "./App";

import { AuthenticationProvider } from "./contexts/AuthenticationContext";
import { BagProvider } from "./contexts/BagContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <AuthenticationProvider>
        <BagProvider>
          <App />
        </BagProvider>
      </AuthenticationProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
