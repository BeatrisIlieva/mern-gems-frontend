import { MediumTitle } from "../MediumTitle/MediumTitle";

import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons";

export const LEFT_NAV_ITEMS = [
  {
    to: "/",
    label: <MediumTitle title={"Collections"} />,
    icon: faGem,
    iconVariant: "header",
  },
];

export const RIGHT_NAV_ITEMS = [
  {
    to: "/users/shopping-bag",
    label: <MediumTitle title={"My Bag"} />,
    icon: faBagShopping,
    iconVariant: "header",
  },
  {
    to: "/users/account",
    label: <MediumTitle title={"Account"} />,
    icon: faUser,
    iconVariant: "header",
  },
];
