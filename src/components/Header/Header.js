import { useNavigate, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { useBagContext } from "../../contexts/BagContext";

import { HorizontalLine } from "../HorizontalLine/HorizontalLine";
import { MiniHeader } from "./MiniHeader/MiniHeader";

import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { Icon } from "../Icon/Icon";
import { Search } from "./Search/Search";
import { SpanTitle } from "../SpanTitle/SpanTitle";

import styles from "./Header.module.css";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { bagQuantity } = useBagContext();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [displaySearchPopup, setDisplaySearchPopup] = useState(false);

  const toggleDisplaySearchPopup = () => {
    setDisplaySearchPopup((displaySearchPopup) => !displaySearchPopup);
  };

  useEffect(() => {
    if (displaySearchPopup) {
      toggleDisplaySearchPopup();
      navigate(location.pathname);
    }
  }, [location.pathname]);

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
          {displaySearchPopup && (
            <Search toggleDisplaySearchPopup={toggleDisplaySearchPopup} />
          )}
          <div className={styles["wrapper"]}>
            <nav>
              <ul className={styles["icon-list"]} role="list">
                <li
                  className={styles["icon-bar-item"]}
                  onClick={toggleDisplaySearchPopup}
                >
                  <Icon icon={faSearch} variant={"header"} />
                  <SpanTitle title={"Search"} />
                </li>
                <li className={styles["icon-bar-item"]}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? styles["selected"]
                        : `${styles["icon-item"]} ${styles["icon-bar-item"]}`
                    }
                    to={"/"}
                  >
                    <Icon icon={faGem} variant={"header"} />
                    <SpanTitle title={"Collections"} />
                  </NavLink>
                </li>
              </ul>
            </nav>
            <img
              className={styles["logo-image"]}
              src={
                "https://res.cloudinary.com/deztgvefu/image/upload/v1719057213/template_images/Screenshot_2024-06-22_at_14.52.43_xrdvgt.png"
              }
              alt="logo-image"
            />
            <nav>
              <ul className={styles["icon-list"]} role="list">
                <li>
                  <Link
                    className={`${styles["icon-bar-item"]} ${styles["icon-bar-item-bag"]}`}
                    to={"/users/shopping-bag"}
                  >
                    <Icon icon={faBagShopping} variant={"header"} />
                    <SpanTitle title={"My Bag"} />
                    {bagQuantity > 0 && (
                      <span
                        className={`${styles["count-span"]} ${styles["pulse"]}`}
                      >
                        {bagQuantity}
                      </span>
                    )}
                  </Link>
                </li>
                <li>
                  <Link className={styles["icon-bar-item"]} to="/users/account">
                    <Icon icon={faUser} variant={"header"} />
                    <SpanTitle title={"Account"} />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <HorizontalLine variant={"large"} position={"absolute"} />
        </header>
      )}
    </>
  );
};
