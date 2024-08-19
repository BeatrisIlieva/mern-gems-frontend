import { useJewelryContext } from "../../../contexts/JewelryContext";

import styles from "./Jewelry.module.css";

export const Jewelry = () => {
  const { selectedEntity } = useJewelryContext();
  return <img src={selectedEntity[0].firstImageUrl} alt="" />;
};
