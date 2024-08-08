import { Header } from "./Header/Header";

import styles from "./Popup.module.css";

export const Popup = ({ title, children }) => {
  return (
    <section className={styles["overlay"]}>
      <div className={styles["modal"]}>
        <Header title={title} />
        {children}
      </div>
    </section>
  );
};
