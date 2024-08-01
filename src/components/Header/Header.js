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

import styles from "./Header.module.css";

const navItems = [{ to: "/", label: "Collections" }];

export const Header = () => {
  const { bagTotalQuantityIntoState } = useBagContext();

  const [displayAccountPopup, setDisplayAccountPopup] = useState(false);
  const [displayMiniBagPopup, setDisplayMiniBagPopup] = useState(false);

  const toggleDisplayAccountPopup = () => {
    setDisplayAccountPopup((displayAccountPopup) => !displayAccountPopup);
  };

  const toggleDisplayMiniBagPopup = () => {
    setDisplayMiniBagPopup((displayMiniBagPopup) => !displayMiniBagPopup);
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["wrapper"]}>
        <NavLinkItem items={navItems} variant={"header"}>
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
          <li className={styles["icon-bar-item"]}>
            <button
              onClick={toggleDisplayMiniBagPopup}
              className={styles["button"]}
            >
              <Icon icon={faBagShopping} variant={"header"} />
              <MediumTitle title={"My Bag"} />
              {bagTotalQuantityIntoState > 0 && (
                <span className={`${styles["count-span"]} ${styles["pulse"]}`}>
                  {bagTotalQuantityIntoState}
                </span>
              )}
            </button>
          </li>
          <li className={styles["icon-bar-item"]}>
            <button
              onClick={toggleDisplayAccountPopup}
              className={styles["button"]}
            >
              <Icon icon={faUser} variant={"header"} />
              <MediumTitle title={"Account"} />
            </button>
          </li>
        </ul>
      </div>
      {displayMiniBagPopup && (
        <MiniBag toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup} />
      )}
      {displayAccountPopup && (
        <Account toggleDisplayAccountPopup={toggleDisplayAccountPopup} />
      )}
      <HorizontalLine variant={"large"} position={"absolute"} />
    </header>
  );
};
