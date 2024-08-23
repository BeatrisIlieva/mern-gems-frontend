import { HorizontalLine } from "../../../reusable/HorizontalLine/HorizontalLine";
import { NavLinkItem } from "../../../reusable/NavLinkItem/NavLinkItem";
import { Link } from "react-router-dom";

import { LEFT_NAV_ITEMS, RIGHT_NAV_ITEMS } from "./navItems";

import styles from "./MainHeader.module.css";

export const MainHeader = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["wrapper"]}>
        <NavLinkItem items={LEFT_NAV_ITEMS} />
        <Link to="/">
          <div className={styles["thumbnail"]}>
            <img
              className={styles["logo-image"]}
              src={
                "https://res.cloudinary.com/deztgvefu/image/upload/v1719057213/template_images/Screenshot_2024-06-22_at_14.52.43_xrdvgt.png"
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
