import { Routes, Route } from "react-router-dom";

import { RouteGuard } from "./components/utils/RouteGuard/RouteGuard";
import { ScrollToTop } from "./components/utils/ScrollToTop/ScrollToTop";
import { Header } from "./components/layout/Header/Header";
import { Home } from "./components/pages/Home/Home";
import { CollectionList } from "./components/pages/CollectionList/CollectionList";
import { Footer } from "./components/layout/Footer/Footer";
import { Jewelry } from "./components/pages/Jewelry/Jewelry";
import { Account } from "./components/pages/Account/Account";
import { Bag } from "./components/pages/Bag/Bag";
import { Checkout } from "./components/pages/Checkout/Checkout";
import { Payment } from "./components/pages/Payment/Payment";
import { OrderConfirmation } from "./components/pages/OrderConfirmation/OrderConfirmation";
import { Page404 } from "./components/pages/Page404/Page404";

import "normalize.css";
import styles from "./App.css";

function App() {
  return (
    <div className={styles["app"]}>
      <ScrollToTop />
      <Header />
      <main className={styles["main"]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/collection"
            element={
              <RouteGuard>
                <Collection />
              </RouteGuard>
            }
          />
          <Route
            path="/:slugifiedCategoryTitle/:slugifiedColorTitle"
            element={
              <RouteGuard>
                <Jewelry />
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
          <Route
            path="*"
            element={
              <RouteGuard>
                <Page404 />
              </RouteGuard>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
