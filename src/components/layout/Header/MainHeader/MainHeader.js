import { HorizontalLine } from "../../../reusable/HorizontalLine/HorizontalLine";
import { NavLinkItem } from "./NavLinkItem/NavLinkItem";
import { Link } from "react-router-dom";

import { LEFT_NAV_ITEMS, RIGHT_NAV_ITEMS } from "./navItems";

import styles from "./MainHeader.module.css";

export const MainHeader = () => {
  return (
    <header id="header" className={styles["header"]}>
      <div className={styles["wrapper"]}>
        <NavLinkItem items={LEFT_NAV_ITEMS} />
        <Link to="/">
          <div className={styles["thumbnail"]}>
            <img
              className={styles["logo-image"]}
              src={
                "https://res.cloudinary.com/deztgvefu/image/upload/v1724933359/forget-me-not-collection/miniImages/Screenshot_2024-08-29_at_15.08.13_ycwzhl.png"
              }
              alt="logo-image"
            />
          </div>
        </Link>
        <NavLinkItem items={RIGHT_NAV_ITEMS} />
      </div>
      <HorizontalLine variantHorizontalLine={"header"} variantHr={"large"} />
    </header>
  );
};
