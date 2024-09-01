import { MediumTitle } from "../../../reusable/MediumTitle/MediumTitle";

import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

export const LEFT_NAV_ITEMS = [
  {
    to: "/collection",
    label: <MediumTitle title={"Collection"} />,
    icon: faGem,
    variant: "header",
  },

  {
    to: "/users/wishlist",
    label: <MediumTitle title={"Wishlist (27)"} />,
    icon: faHeart,
    variant: "header",
  },
];

export const RIGHT_NAV_ITEMS = [
  {
    to: "/users/shopping-bag",
    label: <MediumTitle title={"My Bag  (27)"} />,
    icon: faBagShopping,
    variant: "header",
  },
  {
    to: "/users/account",
    label: <MediumTitle title={"Account"} />,
    icon: faUser,
    variant: "header",
  },
];
