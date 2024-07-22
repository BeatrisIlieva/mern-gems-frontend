import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { RouteGuard } from "./components/RouteGuard/RouteGuard";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { JewelryList } from "./components/JewelryList/JewelryList";
import { JewelryItem } from "./components/JewelryItem/JewelryItem";

import "normalize.css";
import styles from "./App.css";

function App() {
  const [showFooter, setShowFooter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowFooter(false);

    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className={styles["app"]}>
      <ScrollToTop />
      <Header />
      <main className={styles["main"]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/bracelets"
            element={
              <RouteGuard>
                <JewelryList />
              </RouteGuard>
            }
          />
          <Route
            path="/earrings"
            element={
              <RouteGuard>
                <JewelryList />
              </RouteGuard>
            }
          />
          <Route
            path="/necklaces"
            element={
              <RouteGuard>
                <JewelryList />
              </RouteGuard>
            }
          />
          <Route
            path="/rings"
            element={
              <RouteGuard>
                <JewelryList />
              </RouteGuard>
            }
          />
          <Route
            path="/forget-me-not"
            element={
              <RouteGuard>
                <JewelryList />
              </RouteGuard>
            }
          />
          <Route
            path="/sparkling-cluster"
            element={
              <RouteGuard>
                <JewelryList />
              </RouteGuard>
            }
          />
          <Route
            path="/sunflower"
            element={
              <RouteGuard>
                <JewelryList />
              </RouteGuard>
            }
          />
          <Route
            path="/diamond-loop"
            element={
              <RouteGuard>
                <JewelryList />
              </RouteGuard>
            }
          />
          <Route
            path="/:slugifiedCategoryTitle/:slugifiedJewelryTitle/:jewelryId"
            element={
              <RouteGuard>
                <JewelryItem />
              </RouteGuard>
            }
          />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
