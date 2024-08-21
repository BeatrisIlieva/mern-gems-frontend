// import { useEffect, useState, createContext, useContext } from "react";
// import { useParams } from "react-router-dom";

// import { useAuthenticationContext } from "./AuthenticationContext";
// import { useJewelryItemContext } from "./JewelryItemContext";

// import { useService } from "../hooks/useService";

// import { bagServiceFactory } from "../services/bagService";

// export const BagContext = createContext();

// export const BagProvider = ({ children }) => {
//   const [bagItems, setBagItems] = useState([]);

//   const [totalPrice, setTotalPrice] = useState(0);

//   const { jewelryId } = useParams();

//   const [bagTotalQuantity, setBagTotalQuantity] = useState(0);

//   const bagService = useService(bagServiceFactory);

//   const { userId } = useAuthenticationContext();

//   const { increaseSizeQuantity } = useJewelryItemContext();

//   const bagIsEmpty = bagItems.length < 1;

//   useEffect(() => {
//     setTotalPrice(
//       bagItems.reduce((total, item) => {
//         return total + item.price * item.quantity;
//       }, 0)
//     );
//   }, [bagItems]);

//   useEffect(() => {
//     bagService
//       .getAll(userId)
//       .then((data) => {
//         const modifiedData = data.map((item) => ({
//           ...item,
//           totalPrice: item.quantity * item.price,
//         }));

//         setBagItems(modifiedData);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, [userId, bagService]);

//   const updateBagTotalQuantity = (delta) => {
//     setBagTotalQuantity(bagTotalQuantity + delta);
//   };

//   const removeBagItem = (bagId) => {
//     setBagItems((prevBagItems) =>
//       prevBagItems.filter((item) => item._id !== bagId)
//     );

//     const bag = bagItems.filter((item) => item._id === bagId);

//     if (bag.jewelryId === jewelryId) {
//       const sizeId = bag[0].sizeId;

//       increaseSizeQuantity(sizeId);
//     }
//   };

//   const clearShoppingBag = () => {
//     setBagTotalQuantity(0);
//   };

//   const context = {
//     bagTotalQuantity,
//     updateBagTotalQuantity,
//     bagItems,
//     totalPrice,
//     bagIsEmpty,
//     clearShoppingBag,
//     removeBagItem,
//   };

//   return <BagContext.Provider value={context}>{children}</BagContext.Provider>;
// };

// export const useBagContext = () => {
//   const context = useContext(BagContext);

//   return context;
// };

import { useState, useEffect, createContext, useContext } from "react";
import { useAuthenticationContext } from "../contexts/AuthenticationContext";
import { useService } from "../hooks/useService";
import { bagServiceFactory } from "../services/bagService";

export const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const { userId } = useAuthenticationContext();

  const [bagItems, setBagItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [bagTotalQuantity, setBagTotalQuantity] = useState(0);

  const bagService = useService(bagServiceFactory);

  useEffect(() => {
    setTotalPrice(
      bagItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
    );
  }, [bagItems]);

  useEffect(() => {
    setBagTotalQuantity(bagItems.length);
  }, [bagItems]);

  useEffect(() => {
    bagService
      .getAll(userId)
      .then((data) => {
        const modifiedData = data.map((item) => ({
          ...item,
          totalPrice: item.quantity * item.price,
        }));

        setBagItems(modifiedData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userId, bagService]);

  const context = { bagItems, totalPrice, bagTotalQuantity };

  return <BagContext.Provider value={context}>{children}</BagContext.Provider>;
};

export const useBagContext = () => {
  const context = useContext(BagContext);

  return context;
};
