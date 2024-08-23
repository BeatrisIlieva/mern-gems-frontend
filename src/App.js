import { ScrollToTop } from "./components/utils/ScrollToTop/ScrollToTop";
import { Header } from "./components/layout/Header/Header";
import { Main } from "./components/layout/Main/Main";
import { Footer } from "./components/layout/Footer/Footer";

import "normalize.css";
import styles from "./App.css";

function App() {
  return (
    <div className={styles["app"]}>
      <ScrollToTop />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
