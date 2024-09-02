// import { Link } from "react-router-dom";

// import { HorizontalLine } from "../../../reusable/HorizontalLine/HorizontalLine";
// import { NavLinkItem } from "./NavLinkItem/NavLinkItem";

// import { LEFT_NAV_ITEMS, RIGHT_NAV_ITEMS } from "./navItems";

// import styles from "./MainHeader.module.css";

// export const MainHeader = () => {
//   return (
//     <header id="header" className={styles["header"]}>
//       <div className={styles["wrapper"]}>
//         <NavLinkItem items={LEFT_NAV_ITEMS} />
//         <Link to="/">
//           <div className={styles["thumbnail"]}>
//             <img
//               className={styles["logo-image"]}
//               src={
//                 "https://res.cloudinary.com/deztgvefu/image/upload/v1724933359/forget-me-not-collection/miniImages/Screenshot_2024-08-29_at_15.08.13_ycwzhl.png"
//               }
//               alt="logo-image"
//             />
//           </div>
//         </Link>
//         <NavLinkItem items={RIGHT_NAV_ITEMS} />
//       </div>
//       <HorizontalLine variantHorizontalLine={"header"} variantHr={"large"} />
//     </header>
//   );
// };

import { Link } from "react-router-dom";

import { HorizontalLine } from "../../../reusable/HorizontalLine/HorizontalLine";
import { NavLinkItem } from "./NavLinkItem/NavLinkItem";
import { MediumTitle } from "../../../reusable/MediumTitle/MediumTitle";

import { useBagContext } from "../../../../contexts/BagContext";

import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import styles from "./MainHeader.module.css";

export const MainHeader = () => {
  const { bagTotalQuantity } = useBagContext();

  return (
    <header id={styles["main-header"]}>
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
              count={bagTotalQuantity}
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
