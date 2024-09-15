import { useLocation } from "react-router-dom";

import { Header } from "./components/layout/Header/Header";
import { Main } from "./components/layout/Main/Main";
import { Footer } from "./components/layout/Footer/Footer";
import { ScrollToTop } from "./components/layout/ScrollToTop/ScrollToTop";

import "normalize.css";

import styles from "./App.module.css";

function App() {
  const location = useLocation();

  const displayingMiniHeader =
    location.pathname === "/checkout" ||
    location.pathname === "/checkout/payment";

  const style = displayingMiniHeader
    ? `${styles["app"]} ${styles["checkout-process-container"]}`
    : `${styles["app"]}`;

  return (
    <div className={style}>
      <Header />
      <Main />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
