import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faFilterCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { NormalTitle } from "../../NormalTitle/NormalTitle";

import { NavLinkItem } from "../../NavLinkItem/NavLinkItem";

import styles from "./NavItems.module.css";

export const NavItems = ({ collectionName, transformedCollectionName }) => {
  const LEFT_NAV_ITEMS = [
    {
      to: "bracelets",
      label: <NormalTitle title={"Bracelets"} variant={"regular"} />,
      icon: faFilter,
      variant: "filter",
    },
    {
      to: "earrings",
      label: <NormalTitle title={"Earrings"} variant={"regular"} />,
      icon: faFilter,
      variant: "filter",
    },
    {
      to: "necklaces-pendants",
      label: <NormalTitle title={"Necklaces & Pendants"} variant={"regular"} />,
      icon: faFilter,
      variant: "filter",
    },
    {
      to: "rings",
      label: <NormalTitle title={"Rings"} variant={"regular"} />,
      icon: faFilter,
      variant: "filter",
    },
  ];

  const RIGHT_NAV_ITEMS = [
    {
      to: `/${collectionName}`,
      label: (
        <NormalTitle
          title={`${transformedCollectionName} Collection`}
          variant={"regular"}
        />
      ),
      icon: faFilterCircleXmark,
      variant: "filter",
    },
  ];

  return (
    <div className={styles["nav-wrapper"]}>
      <div className={styles["nav-filter"]}>
        <NavLinkItem items={LEFT_NAV_ITEMS} />
      </div>
      <NavLinkItem items={RIGHT_NAV_ITEMS} />
    </div>
  );
};
