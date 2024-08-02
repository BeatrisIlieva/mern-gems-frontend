import { useState } from "react";

import { useBagContext } from "../../contexts/BagContext";

import { HorizontalLine } from "../HorizontalLine/HorizontalLine";

import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { faGem } from "@fortawesome/free-regular-svg-icons";
import { Icon } from "../Icon/Icon";

import { MediumTitle } from "../MediumTitle/MediumTitle";

import { Account } from "../Account/Account";
import { MiniBag } from "../MiniBag/MiniBag";

import { NavLinkItem } from "../NavLinkItem/NavLinkItem";
import { useLocation } from "react-router-dom";

import styles from "./Header.module.css";

const navItemCollections = [{ to: "/", label: "Collections" }];
const navItemAccount = [{ to: "/users/account", label: "My Account" }];
const navItemBag = [{ to: "/users/shopping-bag", label: "My Bag" }];

export const Header = () => {
  const location = useLocation();

  const locationIsShoppingBag = location.pathname === "/users/shopping-bag";
  const { bagTotalQuantityIntoState } = useBagContext();

  const [displayMiniBagPopup, setDisplayMiniBagPopup] = useState(false);
  const [displayEmptyBagMessage, setDisplayEmptyBagMessage] = useState(false);


  const toggleDisplayMiniBagPopup = () => {
    setDisplayMiniBagPopup((displayMiniBagPopup) => !displayMiniBagPopup);
  };

  const toggleDisplayEmptyBagMessage = () => {
    setDisplayEmptyBagMessage(true);

    setTimeout(() => {
      setDisplayEmptyBagMessage(false);
    }, 3000);
  };

  const viewBagClickHandler = () => {
    if (bagTotalQuantityIntoState > 0) {
      toggleDisplayMiniBagPopup();
    } else {
      toggleDisplayEmptyBagMessage();
    }
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["wrapper"]}>
        <NavLinkItem items={navItemCollections} variant={"header"}>
          <Icon icon={faGem} variant={"header"} />
        </NavLinkItem>
        <img
          className={styles["logo-image"]}
          src={
            "https://res.cloudinary.com/deztgvefu/image/upload/v1719057213/template_images/Screenshot_2024-06-22_at_14.52.43_xrdvgt.png"
          }
          alt="logo-image"
        />
        <ul className={styles["icon-list"]} role="list">
          {locationIsShoppingBag ? (
            <NavLinkItem items={navItemBag} variant={"header"}>
              <Icon icon={faBagShopping} variant={"header"} />
            </NavLinkItem>
          ) : (
            <li className={styles["icon-bar-item"]}>
              <button
                onClick={viewBagClickHandler}
                className={styles["button"]}
              >
                <Icon icon={faBagShopping} variant={"header"} />
                <MediumTitle title={"My Bag"} />
                {bagTotalQuantityIntoState > 0 && (
                  <span
                    className={`${styles["count-span"]} ${styles["pulse"]}`}
                  >
                    {bagTotalQuantityIntoState}
                  </span>
                )}
                {displayEmptyBagMessage && (
                  <span
                    className={`${styles["empty-bag-span"]} ${
                      displayEmptyBagMessage ? styles.show : ""
                    }`.trim()}
                  >
                    Your Bag Is Empty
                  </span>
                )}
              </button>
            </li>
          )}
          <NavLinkItem items={navItemAccount} variant={"header"}>
            <Icon icon={faUser} variant={"header"} />
          </NavLinkItem>
        </ul>
      </div>
      {displayMiniBagPopup && (
        <MiniBag toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup} />
      )}
      <HorizontalLine variant={"large"} position={"absolute"} />
    </header>
  );
};
