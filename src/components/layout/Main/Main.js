import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { RouteGuard } from "../../utils/RouteGuard/RouteGuard";
import { Home } from "../../pages/Home/Home";
import { CollectionList } from "../../pages/CollectionList/CollectionList";
import { Jewelry } from "../../pages/Jewelry/Jewelry";
import { Account } from "../../pages/Account/Account";
import { Bag } from "../../pages/Bag/Bag";
import { Checkout } from "../../pages/Checkout/Checkout";
import { Payment } from "../../pages/Payment/Payment";
import { OrderConfirmation } from "../../pages/OrderConfirmation/OrderConfirmation";
import { Page404 } from "../../pages/Page404/Page404";
import { LoadingSpinner } from "../../utils/LoadingSpinner/LoadingSpinner";

import { useIsTransitioning } from "../../../hooks/useIsTransitioning";

import styles from "./Main.module.css";

export const Main = () => {
  const { isTransitioning } = useIsTransitioning();

  return (
    <>
      {/* {isTransitioning ? (
        <LoadingSpinner />
      ) : ( */}
        <main
          className={`${styles["main"]}  ${
            isTransitioning ? styles["slide-out"] : styles["slide-in"]
          }`}
        >
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
      {/* )} */}
    </>
  );
};
