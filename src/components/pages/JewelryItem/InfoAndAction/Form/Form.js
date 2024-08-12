import { useState } from "react";

import { Button } from "../../../reusable/Button/Button";
import { Sizes } from "./Sizes/Sizes";

import { useJewelryItemContext } from "../../../../contexts/JewelryItemContext";
import { useBagContext } from "../../../../contexts/BagContext";

import { useService } from "../../../../hooks/useService";

import { bagServiceFactory } from "../../../../services/bagService";

import styles from "./Form.module.css";

import { SIZE_ERROR_MESSAGE } from "../../../../constants/sizeErrorMessage";

import { EARRING_ID } from "../../../../constants/earringId";

export const Form = ({ toggleDisplayMiniBagPopup }) => {
  const {
    sizeIsSelected,
    updateSizeIsSelected,
    isSoldOut,
    jewelry,
    decreaseSizeQuantity,
    selectedSize,
    updateSelectedSize,
    removeSelectedSize,
    categoryIsEarring,
  } = useJewelryItemContext();

  const [errorMessage, setErrorMessage] = useState("");

  const { updateBagTotalQuantity } = useBagContext();

  const bagService = useService(bagServiceFactory);

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
    <form method="POST" onSubmit={onSubmit} className={styles["form"]}>
      {!categoryIsEarring && jewelry.sizes && (
        <Sizes errorMessage={errorMessage} changeHandler={changeHandler} />
      )}
      <Button
        title={`Add To Bag $ ${jewelry.price}`}
        buttonIsDisabled={isSoldOut}
        variant={"pink"}
      />
    </form>
  );
};
