import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthenticationProvider } from "./contexts/AuthenticationContext";
import { BagProvider } from "./contexts/BagContext";
import { JewelryItemProvider } from "./contexts/JewelryItemContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <AuthenticationProvider>
        <JewelryItemProvider>
          <BagProvider>
            <App />
          </BagProvider>
        </JewelryItemProvider>
      </AuthenticationProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
