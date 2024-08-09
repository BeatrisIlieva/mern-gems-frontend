import { useJewelryItemContext } from "../../../../../contexts/JewelryItemContext";
import { SIZE_FORM_KEY } from "../../../../../constants/sizeFormKey";
import styles from "./Sizes.module.css";

export const Sizes = ({ errorMessage, changeHandler }) => {
  const { jewelry, categoryIsEarring, sizes, selectedSize } =
    useJewelryItemContext();

  return (
    <>
      {!categoryIsEarring && jewelry.sizes && (
        <div className={styles["size-wrapper"]}>
          <div className={styles["radio-container"]}>
            {sizes.map((item) => (
              <div key={item._id}>
                <input
                  type="radio"
                  name={SIZE_FORM_KEY.Size}
                  id={item._id}
                  value={item._id}
                  onChange={changeHandler}
                  checked={
                    Number(selectedSize[SIZE_FORM_KEY.Size]) === item._id
                  }
                  disabled={!Number(item.quantity) > 0}
                />
                <label className={styles["label"]} htmlFor={item._id}>
                  {item.measurement}
                </label>
              </div>
            ))}
          </div>
          <div className={styles["error-message"]}>{errorMessage}</div>
        </div>
      )}
    </>
  );
};
