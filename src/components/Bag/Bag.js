import { useEffect, useState } from "react";

import { BagList } from "./BagList/BagList";

import { ShoppingProcessContainer } from "../ShoppingProcessContainer/ShoppingProcessContainer";
import { useBag } from "../../hooks/useBag";

import { useBagContext } from "../../contexts/BagContext";

import { useService } from "../../hooks/useService";

import { bagServiceFactory } from "../../services/bagService";

import { useAuthenticationContext } from "../../contexts/AuthenticationContext";

export const Bag = () => {
  // const { bagItems } = useBagContext();

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
          increaseQuantityDisabled: item.inventoryQuantity === item.quantity,
          decreaseQuantityDisabled: item.quantity === 0,
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

  const updateBagItemQuantity = (bagId, delta) => {
    setBagItems((state) => {

      const updatedItems = state.map((item) =>
        item._id === bagId
          ? {
              ...item,
              quantity: item.quantity + delta,
              increaseQuantityDisabled: item.quantity + delta >= item.inventoryQuantity,
              decreaseQuantityDisabled: item.quantity + delta <= 0,
            }
          : item
      );
  
      return updatedItems.filter(item => item.quantity > 0);
    });
  };



  // const decreaseBagItemTotalQuantityIntoState = (bagId) => {
  //   setBagItems((state) =>
  //     state.map((x) =>
  //       x._id === bagId
  //         ? {
  //             ...x,
  //             quantity: x.quantity - 1,
  //             increaseQuantityDisabled: x.inventoryQuantity === x.quantity,
  //             decreaseQuantityDisabled: x.quantity === 0,
  //           }
  //         : x
  //     )
  //   );
  // };

  return (
    <ShoppingProcessContainer title={"My Bag"}>
      <ul role="list">
        {bagItems.map((item) => (
          <li key={item._id}>
            <BagList
              {...item}
              updateBagItemQuantity={updateBagItemQuantity}
              // increaseBagItemTotalQuantityIntoState={
              //   increaseBagItemTotalQuantityIntoState
              // }
              // decreaseBagItemTotalQuantityIntoState={
              //   decreaseBagItemTotalQuantityIntoState
              // }
            />
          </li>
        ))}
      </ul>
      <h1>Bag</h1>
    </ShoppingProcessContainer>
  );
};
