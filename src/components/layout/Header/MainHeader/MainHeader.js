import { useMemo } from "react";
import { Link } from "react-router-dom";

import { HorizontalLine } from "../../../reusable/HorizontalLine/HorizontalLine";
import { NavLinkItem } from "./NavLinkItem/NavLinkItem";
import { SwitchLanguage } from "../../../common/SwitchLanguage/SwitchLanguage";

import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { useBagContext } from "../../../../contexts/BagContext";
import { useWishlistContext } from "../../../../contexts/WishlistContext";

import { LABEL_TITLES } from "./constants/labelTitles";

import {
  faBagShopping,
  faUser,
  faGem,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./MainHeader.module.css";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

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
    <header className={styles["header"]}>
      <div className={styles["text-wrapper"]}>
        <div className={styles["text-thumbnail"]}>
          <img
            className={styles["logo-text"]}
            src="https://res.cloudinary.com/deztgvefu/image/upload/v1725291440/forget-me-not-collection/miniImages/Screenshot_2024-08-29_at_15.08.13_ycwzhl_1_qybyju.png"
            alt=""
          />
        </div>
      </div>
      <Link to="/" className={styles["logo-wrapper"]}>
        <div className={styles["thumbnail"]}>
          <img
            className={styles["logo-image"]}
            src={
              "https://res.cloudinary.com/deztgvefu/image/upload/v1726147711/forget-me-not-collection/miniImages/logo2_zfmuo1.png"
            }
            alt="logo-image"
          />
        </div>
      </Link>
      {isAuthenticated && <SwitchLanguage />}
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
