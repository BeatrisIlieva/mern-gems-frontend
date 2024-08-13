import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { HorizontalLine } from "../../reusable/HorizontalLine/HorizontalLine";

import styles from "./Footer.module.css";

export const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setShowFooter(false);

    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {showFooter && (
        <>
          <HorizontalLine variantHr={"large"} />
          <footer className={styles["footer"]}>
            <div className={styles["footer-container"]}>
              © 2024 MERN Gems | Beatris Ilieve | beatrisilieve@icloud.com
            </div>
          </footer>
        </>
      )}
    </>
  );
};
