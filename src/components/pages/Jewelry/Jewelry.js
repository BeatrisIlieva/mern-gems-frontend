import { useJewelryContext } from "../../../contexts/JewelryContext";

import styles from "./Jewelry.module.css";

export const Jewelry = () => {
  const { selectedEntity, selectedColor } = useJewelryContext();
  return <img src={selectedEntity[selectedColor].firstImageUrl} alt="" />;
};
