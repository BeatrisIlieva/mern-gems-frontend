import { useMemo } from "react";
import { Link } from "react-router-dom";

import HorizontalLine from "../../../reusable/HorizontalLine/HorizontalLine";
import NavLinkItem from "./NavLinkItem/NavLinkItem";

import { useBagContext } from "../../../../contexts/BagContext";
import { useWishlistContext } from "../../../../contexts/WishlistContext";

import {
  faBagShopping,
  faUser,
  faGem,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./MainHeader.module.css";

export const MainHeader = () => {
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
      <nav className={styles["nav"]}>
        <ul role="list" className={styles["list"]}>
          <li className={styles["list-item"]}>
            <NavLinkItem to={"/collection"} label={"Collection"} icon={faGem} />
          </li>
          <li className={styles["list-item"]}>
            <NavLinkItem
              to={"/users/wishlist"}
              label={"Wishlist"}
              count={memoizedWishlistTotalQuantity}
              icon={faHeart}
            />
          </li>
          <li className={styles["list-item"]}>
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
          </li>
          <li className={styles["list-item"]}>
            <NavLinkItem
              to={"/users/shopping-bag"}
              label={"My Bag"}
              count={memoizedBagTotalQuantity}
              icon={faBagShopping}
            />
          </li>
          <li className={styles["list-item"]}>
            <NavLinkItem
              to={"/users/account"}
              label={"Account"}
              icon={faUser}
            />
          </li>
        </ul>
      </nav>
      <HorizontalLine variantHorizontalLine={"header"} variantHr={"large"} />
    </header>
  );
};
