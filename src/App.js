import React from "react";
import { Routes, Route } from "react-router-dom";

import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { JewelryByCategoryList } from "./components/JewelryByCategoryList/JewelryByCategoryList";
import { JewelryByCollectionList } from "./components/JewelryByCollectionList/JewelryByCollectionList";

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
          <Route path="/bracelets" element={<JewelryByCategoryList />} />
          <Route path="/earrings" element={<JewelryByCategoryList />} />
          <Route path="/necklaces" element={<JewelryByCategoryList />} />
          <Route path="/rings" element={<JewelryByCategoryList />} />
          <Route path="/forget-me-not" element={<JewelryByCollectionList />} />
          <Route
            path="/sparkling-cluster"
            element={<JewelryByCollectionList />}
          />
          <Route path="/sunflower" element={<JewelryByCollectionList />} />
          <Route path="/diamond-loop" element={<JewelryByCollectionList />} />
          {/* <Route
            path="/:slugifiedCategoryTitle/:slugifiedJewelryTitle/:_id"
            element={<JewelryItem />}
          /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
