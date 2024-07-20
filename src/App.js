import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";

import "normalize.css";
import styles from "./App.css";

function App() {
  return (
    <div className={styles["app"]}>
      <>
        <Header />
        <main className={styles["main"]}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </>
    </div>
  );
}

export default App;
