import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import { AuthProvider } from "./contexts/AuthContext";
// import { BagProvider } from "./contexts/BagContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      {/* <AuthProvider>
        <BagProvider> */}
          <App />
        {/* </BagProvider>
      </AuthProvider> */}
    </Router>
  </React.StrictMode>
);

reportWebVitals();
