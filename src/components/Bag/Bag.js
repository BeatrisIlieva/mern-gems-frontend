import { useState, useEffect } from "react";

import { useService } from "../../hooks/useService";

import { useAuthenticationContext } from "../../contexts/AuthenticationContext";

import { bagServiceFactory } from "../../services/bagService";

import { LargeTitle } from "../LargeTitle/LargeTitle";
import { SmallTitle } from "../SmallTitle/SmallTitle";
import { Icon } from "../Icon/Icon";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

import { BagList } from "./BagList/BagList";

import styles from "./Bag.module.css";

export const Bag = () => {
  const { userId } = useAuthenticationContext();
  const bagService = useService(bagServiceFactory);
  const [loading, setLoading] = useState(true);

  const [bagItems, setBagItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setLoading(true);

    bagService
      .getAll(userId)
      .then((data) => {
        const bagData = data.jewelries;
        const bagItems = bagData[0].documents;
        setBagItems(bagItems);

        const totalPrice = bagData[0].totalTotalPrice;
        setTotalPrice(totalPrice);

        const totalQuantity = bagData[0].totalQuantity;
        setTotalQuantity(totalQuantity);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className={styles["bag"]}>
      <LargeTitle title={"Your Bag"} variant={"large-title"} />
      <div className={styles["wrapper"]}>
        <div className={styles["left-container"]}>
          <div className={styles["delivery"]}>
            <Icon icon={faTruck} variant={"icon"} />
            <SmallTitle title={"Delivery"} />
            <span className={styles["delivery-span"]}>
              {totalQuantity === 1
                ? `(${totalQuantity} item)`
                : `(${totalQuantity} items)`}
            </span>
          </div>
          <ul className={styles["bag-list"]}>
            {bagItems.map((item) => (
              <li
                key={item._id}
                className={styles["bag-left-sub-left-container"]}
              >
                <BagList {...item} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["wrapper"]}>
          <div className={styles["right-container"]}>
            <div className={styles["delivery"]}>
              <SmallTitle title={"Order Summary"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
