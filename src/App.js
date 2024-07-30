import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { useAuthenticationContext } from "./contexts/AuthenticationContext";

import { Authentication } from "./components/Authentication/Authentication";

import { RouteGuard } from "./components/RouteGuard/RouteGuard";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { JewelryList } from "./components/JewelryList/JewelryList";
import { JewelryItem } from "./components/JewelryItem/JewelryItem";
import { Account } from "./components/Account/Account";
import { Bag } from "./components/ShoppingProcessContainer/Bag/Bag";
import { Checkout } from "./components/ShoppingProcessContainer/Checkout/Checkout";
import { Payment } from "./components/ShoppingProcessContainer/Payment/Payment";
import { OrderConfirmation } from "./components/ShoppingProcessContainer/OrderConfirmation/OrderConfirmation";

import "normalize.css";
import styles from "./App.css";

function App() {
  const [showFooter, setShowFooter] = useState(false);
  const location = useLocation();

  const { isAuthenticated } = useAuthenticationContext();

  useEffect(() => {
    setShowFooter(false);

    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className={styles["app"]}>
      {!isAuthenticated && <Authentication />}
      <ScrollToTop />
      <Header />
      <main className={styles["main"]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/forget-me-not/*"
            element={
              <RouteGuard>
                <JewelryList />
              </RouteGuard>
            }
          />
          <Route
            path="/sparkling-cluster/*"
            element={
              <RouteGuard>
                <JewelryList />
              </RouteGuard>
            }
          />
          <Route
            path="/sunflower/*"
            element={
              <RouteGuard>
                <JewelryList />
              </RouteGuard>
            }
          />
          <Route
            path="/diamond-loop/*"
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
          <Route
            path="/users/account"
            element={
              <RouteGuard>
                <Account />
              </RouteGuard>
            }
          />
          <Route
            path="/users/shopping-bag"
            element={
              <RouteGuard>
                <Bag />
              </RouteGuard>
            }
          />
          <Route
            path="/checkout"
            element={
              <RouteGuard>
                <Checkout />
              </RouteGuard>
            }
          />
          <Route
            path="/payment"
            element={
              <RouteGuard>
                <Payment />
              </RouteGuard>
            }
          />
          <Route
            path="/order-confirmation"
            element={
              <RouteGuard>
                <OrderConfirmation />
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
