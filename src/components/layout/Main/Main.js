import { Routes, Route } from "react-router-dom";

import { RouteGuard } from "./RouteGuard/RouteGuard";
import { Home } from "../../pages/Home/Home";
import { CollectionList } from "../../pages/CollectionList/CollectionList";
import { CollectionItem } from "../../pages/CollectionItem/CollectionItem";
import { Account } from "../../pages/Account/Account";
import { Bag } from "../../pages/Bag/Bag";
import { Wishlist } from "../../pages/Wishlist/Wishlist";
import { Checkout } from "../../pages/Checkout/Checkout";
import { OrderConfirmation } from "../../pages/OrderConfirmation/OrderConfirmation";
import { Page404 } from "../../pages/Page404/Page404";

import styles from "./Main.module.css";

export const Main = () => {
  return (
    <main id={styles["main"]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/collection"
          element={
            <RouteGuard>
              <CollectionList />
            </RouteGuard>
          }
        />
        <Route
          path="/collection/:slugifiedCategoryTitle/:slugifiedColorTitle"
          element={
            <RouteGuard>
              <CollectionItem />
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
          path="/users/wishlist"
          element={
            <RouteGuard>
              <Wishlist />
            </RouteGuard>
          }
        />
        <Route
          path="/checkout/*"
          element={
            <RouteGuard>
              <Checkout />
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
  );
};
