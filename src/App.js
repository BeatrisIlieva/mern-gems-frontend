import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { Authentication } from "./components/Authentication/Authentication";
import { RouteGuard } from "./components/RouteGuard/RouteGuard";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Header } from "./components/Header/Header";
import { MiniHeader } from "./components/MiniHeader/MiniHeader";
import { Collection } from "./components/reusable/Collection/Collection";
import { Footer } from "./components/Footer/Footer";
import { JewelryList } from "./components/pages/JewelryList/JewelryList";
import { JewelryItem } from "./components/pages/JewelryItem/JewelryItem";
import { Account } from "./components/pages/Account/Account";
import { Bag } from "./components/ShoppingProcessContainer/Bag/Bag";
import { Checkout } from "./components/ShoppingProcessContainer/Checkout/Checkout";
import { Payment } from "./components/ShoppingProcessContainer/Payment/Payment";
import { OrderConfirmation } from "./components/pages/OrderConfirmation/OrderConfirmation";
import { Page404 } from "./components/pages/Page404/Page404";

import { useAuthenticationContext } from "./contexts/AuthenticationContext";

import "normalize.css";
import styles from "./App.css";

function App() {
  const [showFooter, setShowFooter] = useState(false);

  const location = useLocation();

  const { isAuthenticated } = useAuthenticationContext();

  const isCheckoutOrPaymentLocation =
    location.pathname === "/checkout" || location.pathname === "/payment";

  useEffect(() => {
    if (isAuthenticated) {
      document.body.style.overflow = "visible";
    }
  });

  useEffect(() => {
    setShowFooter(false);

    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className={styles["app"]}>
      {!isAuthenticated && <Authentication />}
      <ScrollToTop />
      {isCheckoutOrPaymentLocation ? <MiniHeader /> : <Header />}
      <main className={styles["main"]}>
        <Routes>
          <Route path="/" element={<Collection />} />
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
            path="/:slugifiedCollectionTitle/:slugifiedCategoryTitle/:slugifiedJewelryTitle/:jewelryId"
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
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
