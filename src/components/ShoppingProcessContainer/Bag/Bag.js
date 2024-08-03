import { Link } from "react-router-dom";

import { useBagContext } from "../../../contexts/BagContext";

import { ShoppingProcessContainer } from "../ShoppingProcessContainer";

import { BagList } from "../../BagList/BagList";

import { OrderSummary } from "../OrderSummary/OrderSummary";

import { Button } from "../../Button/Button";

import styles from "./Bag.module.css";

import { LeftSide } from "../LeftSide/LeftSide";
import { RightSide } from "../RightSide/RightSide";

import { NonEmptyBag } from "./NonEmptyBag/NonEmptyBag";

import { EmptyBag } from "./EmptyBag/EmptyBag";

export const Bag = () => {
  const { bagTotalQuantityIntoState } = useBagContext();

  return <>{bagTotalQuantityIntoState > 0 ? <NonEmptyBag /> : <EmptyBag />}</>;
};
