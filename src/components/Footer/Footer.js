import { HorizontalLine } from "../HorizontalLine/HorizontalLine";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <>
      <HorizontalLine variantHr={"large"} />
      <footer className={styles["footer"]}>
        <div className={styles["footer-container"]}>
          © 2024 MERN Gems | Beatris Ilieve | beatrisilieve@icloud.com
        </div>
      </footer>
    </>
  );
};
