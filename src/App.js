import React from "react";
import { Routes, Route } from "react-router-dom";

import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { JewelryList } from "./components/JewelryList/JewelryList";
import { JewelryItem } from "./components/JewelryItem/JewelryItem";

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
          <Route path="/bracelets" element={<JewelryList />} />
          <Route path="/earrings" element={<JewelryList />} />
          <Route path="/necklaces" element={<JewelryList />} />
          <Route path="/rings" element={<JewelryList />} />
          <Route path="/forget-me-not" element={<JewelryList />} />
          <Route path="/sparkling-cluster" element={<JewelryList />} />
          <Route path="/sunflower" element={<JewelryList />} />
          <Route path="/diamond-loop" element={<JewelryList />} />
          <Route
            path="/:slugifiedCategoryTitle/:slugifiedJewelryTitle/:jewelryId"
            element={<JewelryItem />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
