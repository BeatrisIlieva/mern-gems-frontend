import { useMemo } from "react";

import { HorizontalLine } from "../../../reusable/HorizontalLine/HorizontalLine";
import { NavLinkItem } from "./NavLinkItem/NavLinkItem";
import { SwitchLanguage } from "../../../reusable/SwitchLanguage/SwitchLanguage";
import { Logo } from "./Logo/Logo";

import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { useBagContext } from "../../../../contexts/BagContext";
import { useWishlistContext } from "../../../../contexts/WishlistContext";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { LABEL_TITLES } from "./constants/languageRelated";

import {
  faBagShopping,
  faUser,
  faGem,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./MainHeader.module.css";

export const MainHeader = () => {
  const { language } = useLanguageContext();

  const { isAuthenticated } = useAuthenticationContext();

  const { bagTotalQuantity } = useBagContext();

  const { wishlistTotalQuantity } = useWishlistContext();

  const memoizedBagTotalQuantity = useMemo(
    () => bagTotalQuantity,
    [bagTotalQuantity]
  );
  const memoizedWishlistTotalQuantity = useMemo(
    () => wishlistTotalQuantity,
    [wishlistTotalQuantity]
  );

  return (
    <header className={styles["main-header"]}>
      {isAuthenticated && <SwitchLanguage variant={"to-the-left"} />}
      <Logo />
      <nav className={styles["nav"]}>
        <ul role="list" className={styles["list"]}>
          <li className={styles["list-item"]}>
            <NavLinkItem
              to={"/collection"}
              label={LABEL_TITLES["Collection"][language]}
              icon={faGem}
            />
          </li>
          <li className={styles["list-item"]}>
            <NavLinkItem
              to={"/users/wishlist"}
              label={LABEL_TITLES["Wishlist"][language]}
              count={memoizedWishlistTotalQuantity}
              icon={faHeart}
            />
          </li>
          <li className={styles["list-item"]}>
            <NavLinkItem
              to={"/users/shopping-bag"}
              label={LABEL_TITLES["My Bag"][language]}
              count={memoizedBagTotalQuantity}
              icon={faBagShopping}
            />
          </li>
          <li className={styles["list-item"]}>
            <NavLinkItem
              to={"/users/account"}
              label={LABEL_TITLES["Account"][language]}
              icon={faUser}
            />
          </li>
        </ul>
      </nav>
      <HorizontalLine variantHorizontalLine={"header"} variantHr={"large"} />
    </header>
  );
};
