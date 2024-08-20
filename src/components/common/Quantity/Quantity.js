import { useJewelryContext } from "../../../contexts/JewelryContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

import styles from "./Quantity.module.css"

export const Quantity = ({jewelryId}) => {
  const { selectedEntity, selectedColor } = useJewelryContext();

  const inventories = selectedEntity[selectedColor].inventories;
  console.log(inventories)

  return (
    <div>
      <FontAwesomeIcon icon={faPlus} className={styles["icon"]} />
      {inventories.quantity}
      <FontAwesomeIcon icon={faMinus} className={styles["icon"]} />
    </div>
  );
};
