import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import * as jewelryItemService from "../../services/jewelryItemService";

import { JewelryImage } from "./JewelryImage/JewelryImage";
import { CircleIcon } from "./CircleIcon/CircleIcon";

import styles from "./JewelryItem.module.css";

const SizeFormKeys = {
  Size: "size",
};

const EarringId = 2;

export const JewelryItem = () => {
  const [loading, setLoading] = useState(true);

  const { jewelryId } = useParams();
  const [jewelry, setJewelry] = useState([]);

  const [sizeIsSelected, setSizeIsSelected] = useState(true);

  const [leftIsSelected, setLeftIsSelected] = useState(true);
  const [rightIsSelected, setRightIsSelected] = useState(false);

  const toggleSelected = () => {
    setLeftIsSelected(!leftIsSelected);
    setRightIsSelected(!rightIsSelected);
  };

  useEffect(() => {
    setLoading(true);

    jewelryItemService
      .getOne(jewelryId)
      .then((data) => {
        setJewelry(data[0]);
        setSizeIsSelected(data[0].category === EarringId);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className={styles["jewelry-wrapper"]}>
      <div className={styles["left-container"]}>
        <JewelryImage
          isSoldOut={jewelry.isSoldOut}
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
        <h2 className={styles["title"]}>{jewelry.title}</h2>
        <p>
          {jewelry.description}.{" "}
          {jewelry.sizes &&
            jewelry.category === 2 &&
            jewelry.sizes[0].measurement}
          .
        </p>
      </div>
    </section>
  );
};
