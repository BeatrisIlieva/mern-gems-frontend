import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { RouteGuard } from "./components/RouteGuard/RouteGuard";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Header } from "./components/common/Header/Header";
import { Home } from "./components/pages/Home/Home";
import { Footer } from "./components/common/Footer/Footer";
import { JewelryList } from "./components/pages/JewelryList/JewelryList";
import { JewelryItem } from "./components/pages/JewelryItem/JewelryItem";
import { Account } from "./components/pages/Account/Account";
import { Bag } from "./components/pages/ShoppingProcessContainer/Bag/Bag";
import { Checkout } from "./components/pages/ShoppingProcessContainer/Checkout/Checkout";
import { Payment } from "./components/pages/ShoppingProcessContainer/Payment/Payment";
import { OrderConfirmation } from "./components/pages/OrderConfirmation/OrderConfirmation";
import { Page404 } from "./components/pages/Page404/Page404";

import "normalize.css";
import styles from "./App.css";

function App() {
  const [showFooter, setShowFooter] = useState(false);

  // useEffect(() => {
  //   setShowFooter(false);

  //   const timer = setTimeout(() => {
  //     setShowFooter(true);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, [location]);

  return (
    <div className={styles["app"]}>
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
