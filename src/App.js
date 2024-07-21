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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
