import { Link } from "react-router-dom";

import HorizontalLine from "../../../reusable/HorizontalLine/HorizontalLine";
import NavLinkItem from "./NavLinkItem/NavLinkItem";
import { MediumTitle } from "../../../reusable/MediumTitle/MediumTitle";

import { useBagContext } from "../../../../contexts/BagContext";
import { useWishlistContext } from "../../../../contexts/WishlistContext";

import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import styles from "./MainHeader.module.css";

export const MainHeader = () => {
  const { bagTotalQuantity } = useBagContext();

  const { wishlistTotalQuantity } = useWishlistContext();

  return (
    <header className={styles["header"]}>
      <nav className={styles["nav"]}>
        <ul role="list" className={styles["list"]}>
          <li className={styles["list-item"]}>
            <NavLinkItem
              to={"/collection"}
              label={<MediumTitle title={"Collection"} />}
              icon={faGem}
            />
          </li>
          <li className={styles["list-item"]}>
            <NavLinkItem
              to={"/users/wishlist"}
              label={<MediumTitle title={"Wishlist"} />}
              count={wishlistTotalQuantity}
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
              label={<MediumTitle title={"My Bag"} />}
              count={bagTotalQuantity}
              icon={faBagShopping}
            />
          </li>
          <li className={styles["list-item"]}>
            <NavLinkItem
              to={"/users/account"}
              label={<MediumTitle title={"Account"} />}
              icon={faUser}
            />
          </li>
        </ul>
      </nav>
      <HorizontalLine variantHorizontalLine={"header"} variantHr={"large"} />
    </header>
  );
};
