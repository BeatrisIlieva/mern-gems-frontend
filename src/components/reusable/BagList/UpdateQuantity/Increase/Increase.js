import { useService } from "../../../../../hooks/useService";

import { bagServiceFactory } from "../../../../../services/bagService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./Increase.module.css";

export const Increase = ({ bagId, inventoryId }) => {
  const bagService = useService(bagServiceFactory);

  const clickHandler = async () => {
    try {
      await bagService.increase(bagId, inventoryId);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div onClick={clickHandler}>
      <FontAwesomeIcon icon={faPlus} className={styles["icon"]} />
    </div>
  );
};
