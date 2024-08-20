import { useState, useEffect} from "react";

import { useJewelryContext } from "../../../../contexts/JewelryContext";
import { SIZE_FORM_KEY } from "../../../../constants/sizeFormKey";

import { Button } from "../../../reusable/Button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

import { SIZE_ERROR_MESSAGE } from "../../../../constants/sizeErrorMessage";

import styles from "./Sizes.module.css";

// { errorMessage, changeHandler }

export const Sizes = () => {
  const { selectedEntity, selectedColor } = useJewelryContext();

  const [errorMessage, setErrorMessage] = useState("");

  const inventories = selectedEntity[selectedColor].inventories;
  console.log(inventories);

  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    setSelectedSize(null);
    setErrorMessage(null)
  }, [selectedColor])

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!selectedSize) {
      setErrorMessage(SIZE_ERROR_MESSAGE);
      return;
    }

    try {
      // if (jewelry.category === EARRING_ID) {
      //   const sizeId = jewelry.sizes[0]._id;
      //   await addToBagHandler({ size: sizeId }, jewelry._id);
      // } else {
      //   await addToBagHandler(selectedSize, jewelry._id);
      //   updateSizeIsSelected(false);
      // }
      // removeSelectedSize();
    } catch (err) {
      console.log(err.message);
    }
  };

  const changeHandler = (e) => {

    setSelectedSize(e.target.value);

    setErrorMessage("");
  };

  return (
    <form method="POST" onSubmit={onSubmit} className={styles["form"]}>
      <div className={styles["size-wrapper"]}>
        <div className={styles["radio-container"]}>
          {inventories.map((item) => (
            <div key={item.size} className={styles["wrapper"]}>
              {/* <span>{`$${item.price}`}</span> */}
              <input
                type="radio"
                name={SIZE_FORM_KEY.Size}
                id={item.size}
                value={item.size}
                onChange={changeHandler}
                onClick={changeHandler}
                checked={item.size === selectedSize}
                // disabled={!Number(item.quantity) > 0}
              />
              <label className={styles["label"]} htmlFor={item.size}>
                {item.size}
              </label>
              <div className={styles["quantity"]}>
                {/* <FontAwesomeIcon icon={faPlus} className={styles["icon"]}/>
              {item.quantity}
              <FontAwesomeIcon icon={faMinus} className={styles["icon"]}/> */}
              </div>
            </div>
          ))}
        </div>
        <div className={styles["error-message"]}>{errorMessage}</div>
      </div>
      <Button variant={"pink"} title={"Add To Bag"} />
    </form>
  );
};
