import { useState } from "react";

import { useService } from "../../../hooks/useService";
import { bagServiceFactory } from "../../../services/bagService";

import { Button } from "../../Button/Button";
import { NormalTitle } from "../../NormalTitle/NormalTitle";
import { useJewelryItemContext } from "../../../contexts/JewelryItemContext";
import styles from "./Form.module.css";

import { SIZE_FORM_KEY } from "../../../constants/sizeFormKey";
import { SIZE_ERROR_MESSAGE } from "../../../constants/sizeErrorMessage";

import { EARRING_ID } from "../../../constants/earringId";
import { useBagContext } from "../../../contexts/BagContext";

export const Form = ({ toggleDisplayMiniBagPopup }) => {
  const {
    sizes,
    sizeIsSelected,
    updateSizeIsSelected,
    isSoldOut,
    jewelry,
    decreaseSizeQuantity,
    selectedSize,
    updateSelectedSize,
    removeSelectedSize,
  } = useJewelryItemContext();

  const { updateBagTotalQuantity } = useBagContext();

  const bagService = useService(bagServiceFactory);

  const [errorMessage, setErrorMessage] = useState("");

  const addToBagHandler = async (data, jewelryId) => {
    await bagService.create(data, jewelryId);

    const sizeId = Number(data["size"]);

    decreaseSizeQuantity(sizeId);

    updateBagTotalQuantity(+1);

    toggleDisplayMiniBagPopup();
  };

  const changeHandler = (e) => {
    updateSelectedSize(e);
    updateSizeIsSelected(true);
    setErrorMessage("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!sizeIsSelected) {
      setErrorMessage(SIZE_ERROR_MESSAGE);
      return;
    }

    try {
      if (jewelry.category === EARRING_ID) {
        const sizeId = jewelry.sizes[0]._id;

        await addToBagHandler({ size: sizeId }, jewelry._id);
      } else {
        await addToBagHandler(selectedSize, jewelry._id);

        updateSizeIsSelected(false);
      }
      removeSelectedSize();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form method="POST" onSubmit={onSubmit}>
      {jewelry.category !== EARRING_ID && jewelry.sizes && (
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
      <div className={styles["add-margin"]}>
        <NormalTitle title={`$ ${jewelry.price}`} variant={"bolded"} />
      </div>
      <Button
        title={"Add To Bag"}
        buttonIsDisabled={isSoldOut}
        variant={"pink-button"}
        variantDisabled={"pink-button-disabled"}
      />
    </form>
  );
};
