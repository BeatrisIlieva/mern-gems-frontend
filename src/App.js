import React from "react";
import { Routes, Route } from "react-router-dom";

import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { JewelryByCategoryList } from "./components/JewelryByCategoryList/JewelryByCategoryList";

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
