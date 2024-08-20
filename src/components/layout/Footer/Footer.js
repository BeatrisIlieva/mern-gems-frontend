import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
        <footer className={styles["footer"]}>
          <div className={styles["footer-container"]}>
            © 2024 MERN Gems | Beatris Ilieve | beatrisilieve@icloud.com
          </div>
        </footer>
      )}
    </>
  );
};
