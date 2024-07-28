import { useEffect, useState } from "react";

import { BagList } from "./BagList/BagList";

import { ShoppingProcessContainer } from "../ShoppingProcessContainer/ShoppingProcessContainer";

import { useService } from "../../hooks/useService";

import { bagServiceFactory } from "../../services/bagService";

import { useAuthenticationContext } from "../../contexts/AuthenticationContext";

import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

export const Bag = () => {
  const bagService = useService(bagServiceFactory);

  const { userId } = useAuthenticationContext();

  const [loading, setLoading] = useState(true);

  const [bagItems, setBagItems] = useState([]);

  useEffect(() => {
    setLoading(true);

    bagService
      .getAll(userId)
      .then((data) => {
        const modifiedData = data.map((item) => ({
          ...item,
          increaseQuantityDisabled: item.inventoryQuantity === 1,
          decreaseQuantityDisabled: item.quantity === 0,
          totalPrice: item.quantity * item.price,
        }));

        setBagItems(modifiedData);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId]);

  console.log(bagItems);

  const updateBagItemQuantityIntoState = (bagId, delta) => {
    setBagItems((state) => {
      const updatedItems = state.map((item) =>
        item._id === bagId
          ? {
              ...item,
              quantity: item.quantity + delta,
              increaseQuantityDisabled:
                item.quantity + delta > item.inventoryQuantity,
              decreaseQuantityDisabled: item.quantity + delta <= 0,
              totalPrice: (item.quantity + delta) * item.price,
            }
          : item
      );

      return updatedItems.filter((item) => item.quantity > 0);
    });
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      <ShoppingProcessContainer title={"My Bag"}>
        <ul role="list">
          {bagItems.map((item) => (
            <li key={item._id}>
              <BagList
                {...item}
                updateBagItemQuantityIntoState={updateBagItemQuantityIntoState}
              />
            </li>
          ))}
        </ul>
        <h1>Bag</h1>
      </ShoppingProcessContainer>
    </>
  );
};
