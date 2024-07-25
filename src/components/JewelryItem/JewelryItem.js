import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useService } from "../../hooks/useService";

import { jewelryServiceFactory } from "../../services/jewelryService";
import { bagServiceFactory } from "../../services/bagService";

import { JewelryImage } from "./JewelryImage/JewelryImage";
import { PinkButton } from "../PinkButton/PinkButton";
import { SmallTitle } from "../SmallTitle/SmallTitle";
import { LargeTitle } from "../LargeTitle/LargeTitle";

import styles from "./JewelryItem.module.css";

const SizeFormKeys = {
  Size: "size",
};

const EarringId = 2;

const ErrorMessage = "Ensure you have selected the desired size";

export const JewelryItem = () => {
  const [sizes, setSizes] = useState([]);
  const [isSoldOut, setIsSoldOut] = useState(false);

  const jewelryService = useService(jewelryServiceFactory);
  const bagService = useService(bagServiceFactory);

  const [loading, setLoading] = useState(true);

  const { jewelryId } = useParams();
  const [jewelry, setJewelry] = useState([]);

  const [leftIsSelected, setLeftIsSelected] = useState(true);
  const [rightIsSelected, setRightIsSelected] = useState(false);

  const [sizeIsSelected, setSizeIsSelected] = useState(true);
  const [selectedSize, setSelectedSize] = useState({ [SizeFormKeys.Size]: 0 });

  const [errorMessage, setErrorMessage] = useState("");

  const toggleSelected = () => {
    setLeftIsSelected(!leftIsSelected);
    setRightIsSelected(!rightIsSelected);
  };

  useEffect(() => {
    setLoading(true);

    jewelryService
      .getOne(jewelryId)
      .then((data) => {
        setJewelry(data[0]);
        setSizeIsSelected(data[0].category === EarringId);

        setSizes(data[0].sizes);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const changeHandler = (e) => {
    setSelectedSize((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const decreaseSizeQuantity = (sizeId) => {
    setSizes((prevSizes) =>
      prevSizes.map((size) =>
        size._id === sizeId ? { ...size, quantity: size.quantity - 1 } : size
      )
    );
  };

  useEffect(() => {

    const allZero = sizes.every(size => size.quantity === 0);
    setIsSoldOut(allZero);
  }, [sizes]);

  const addToBagHandler = async (data, jewelryId) => {
    try {
      await bagService.create(data, jewelryId);

      const sizeId = Number(data["size"]);

      decreaseSizeQuantity(sizeId);
    } catch (err) {
      console.log(err.message);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!sizeIsSelected) {
      setErrorMessage(ErrorMessage);
      return;
    }

    try {
      if (jewelry.category === EarringId) {
        const sizeId = jewelry.sizes[0]._id;

        await addToBagHandler({ size: sizeId }, jewelry._id);
      } else {
        await addToBagHandler(selectedSize, jewelry._id);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <section className={styles["jewelry-wrapper"]}>
      <div className={styles["left-container"]}>
        <JewelryImage
          isSoldOut={isSoldOut}
          imageUrl={
            leftIsSelected ? jewelry.firstImageUrl : jewelry.secondImageUrl
          }
          title={jewelry.title}
          toggleSelected={toggleSelected}
          variant={leftIsSelected ? "left-image" : "right-image"}
          leftIsSelected={leftIsSelected}
          rightIsSelected={rightIsSelected}
        />
      </div>
      <div className={styles["right-container"]}>
        <LargeTitle title={jewelry.title} variant={"large-title"} />
        <p className={styles["description"]}>
          {jewelry.description}.{" "}
          {jewelry.sizes &&
            jewelry.category === EarringId &&
            jewelry.sizes[0].measurement}
        </p>
        {jewelry.category !== EarringId && <SmallTitle title={"Size:"} />}
        <form method="POST" onSubmit={onSubmit}>
          {jewelry.category !== EarringId && jewelry.sizes && (
            <div className={styles["size-wrapper"]}>
              <div className={styles["radio-container"]}>
                {sizes.map((item) => (
                  <div key={item._id}>
                    <input
                      type="radio"
                      name={SizeFormKeys.Size}
                      id={item._id}
                      value={item._id}
                      onChange={changeHandler}
                      checked={
                        Number(selectedSize[SizeFormKeys.Size]) === item._id
                      }
                      onClick={() => {
                        setSizeIsSelected(true);
                        setErrorMessage("");
                      }}
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
          <SmallTitle title={`$ ${jewelry.price}`} />
           <PinkButton title={"Add To Bag"} buttonIsDisabled={isSoldOut}/>
        </form>
      </div>
    </section>
  );
};
