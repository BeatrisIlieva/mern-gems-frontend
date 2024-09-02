import { NormalTitle } from "../../../../../reusable/NormalTitle/NormalTitle";

import { SIZE_FORM_KEY } from "../../../../../../constants/sizeFormKey";

import styles from "./Sizes.module.css";

export const Sizes = ({
  inventories,
  errorMessage,
  changeHandler,
  selectedSize,
}) => {
  return (
    <div className={styles["size-wrapper"]}>
      <NormalTitle title={"Size"} variant={"bolded"} />
      <div className={styles["radio-container"]}>
        {inventories.map((item) => (
          <div key={item.size} className={styles["wrapper"]}>
            <input
              type="radio"
              name={SIZE_FORM_KEY.Size}
              id={item.size}
              value={item.size}
              onChange={changeHandler}
              onClick={changeHandler}
              checked={item.size === selectedSize}
              disabled={item.quantity === 0}
            />
            <label className={styles["label"]} htmlFor={item.size}>
              {item.size}
            </label>
            <NormalTitle title={`$${item.price}`} variant={"bolded"} />
          </div>
        ))}
      </div>
      <div className={styles["error-message"]}>{errorMessage}</div>
    </div>
  );
};
