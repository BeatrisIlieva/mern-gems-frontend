import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { NavItem } from "./NavItem/NavItem";
import { navItems } from "./NavItem/navItems";
import { HorizontalLine } from "../HorizontalLine/HorizontalLine";
import { MiniHeader } from "./MiniHeader/MiniHeader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";

export const Header = () => {
  const isAuthenticated = false;
  const totalQuantity = 0;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 10 && currentScrollY > lastScrollY) {
        setIsScrolled(true);
        setIsScrollingUp(false);
      } else if (currentScrollY < lastScrollY) {
        setIsScrolled(false);
        setIsScrollingUp(true);
      } else if (currentScrollY === 0) {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {isScrolled ? (
        <MiniHeader />
      ) : (
        <header className={styles["header"]}>
          <div className={styles["wrapper"]}>
            <nav className={styles["nav"]}>
              <ul className={styles["nav-list"]} role="list">
                {navItems.map((item, index) => (
                  <NavItem
                    key={item.title}
                    path={item.path}
                    title={item.title}
                    index={index}
                  />
                ))}
              </ul>
            </nav>
            <Link to={"/"}>
              <img
                className={styles["logo-image"]}
                src={
                  "https://res.cloudinary.com/deztgvefu/image/upload/v1719057213/template_images/Screenshot_2024-06-22_at_14.52.43_xrdvgt.png"
                }
                alt="logo-image"
              />
            </Link>
            <ul className={styles["icon-list"]} role="list">
              <li className={`${styles["icon-item"]}`}>
                <Link
                  className={styles["icon-bar-item"]}
                  to={"/users/shopping-bag"}
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    className={styles["icon-span"]}
                    // onClick={() => popupClickHandler(POPUP_OPTIONS.Search)}
                  />
                  <span className={styles["text-span"]}>Search</span>
                </Link>
              </li>
              <li className={`${styles["icon-item"]}`}>
                <Link
                  className={`${styles["icon-bar-item"]} ${styles["icon-bar-item-bag"]}`}
                  to={"/users/shopping-bag"}
                >
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    className={styles["icon-span"]}
                  />
                  <span className={styles["text-span"]}>My Bag</span>
                  <span className={styles["count-span"]}>
                    {totalQuantity}
                  </span>
                </Link>
              </li>
              {!isAuthenticated && (
                <li className={styles["icon-item"]}>
                  <Link className={styles["icon-bar-item"]} to="/users/login">
                    <FontAwesomeIcon
                      icon={faUser}
                      className={styles["icon-span"]}
                    />
                    <span className={styles["text-span"]}>Sign In</span>
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li className={styles["icon-item"]}>
                  <Link className={styles["icon-bar-item"]} to="/users/account">
                    <span>
                      <FontAwesomeIcon
                        icon={faUser}
                        className={styles["icon-span"]}
                      />
                    </span>
                    <span className={styles["text-span"]}>Account</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <HorizontalLine variant={"large"} position={"absolute"} />
        </header>
      )}
    </>
  );
};
