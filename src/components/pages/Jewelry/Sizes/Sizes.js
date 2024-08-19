import { useJewelryContext } from "../../../../contexts/JewelryContext";
import { SIZE_FORM_KEY } from "../../../../constants/sizeFormKey";

import styles from "./Sizes.module.css";

// { errorMessage, changeHandler }

export const Sizes = () => {
  // const { sizes, selectedSize } = useJewelryItemContext();
  const { selectedEntity, selectedColor } = useJewelryContext();

  // const sizes = selectedEntity[selectedColor].map(inventories.sizes)
  const sizes = selectedEntity[selectedColor].inventories;

  console.log("here", selectedEntity[selectedColor].inventories);

  return (
    <div className={styles["size-wrapper"]}>
      <div className={styles["radio-container"]}>
        {sizes.map((item) => (
          <>
            <span>{item.price}</span>
            <div key={item.size}>
              <input
                type="radio"
                name={SIZE_FORM_KEY.Size}
                id={item.size}
                value={item.size}
                // onChange={changeHandler}
                // checked={Number(selectedSize[SIZE_FORM_KEY.Size]) === item._id}
                disabled={!Number(item.quantity) > 0}
              />
              <label className={styles["label"]} htmlFor={item._id}>
                {item.size}
              </label>
            </div>
          </>
        ))}
      </div>
      {/* <div className={styles["error-message"]}>{errorMessage}</div> */}
    </div>
  );
};
