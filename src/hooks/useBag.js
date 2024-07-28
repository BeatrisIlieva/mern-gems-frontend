import { useState, useEffect } from "react";

import { useService } from "./useService";

import { useAuthenticationContext } from "../contexts/AuthenticationContext";

import { bagServiceFactory } from "../services/bagService";

// export const useBag = () => {
//   const bagService = useService(bagServiceFactory);

//   const { userId } = useAuthenticationContext();

//   const [loading, setLoading] = useState(true);

//   const [bagItems, setBagItems] = useState([]);

//   // useEffect(() => {
//   //   setLoading(true);

//   //   bagService
//   //     .getAll(userId)
//   //     .then((data) => {
//   //       setBagItems(data);
//   //     })
//   //     .catch((err) => {
//   //       console.log(err.message);
//   //     })
//   //     .finally(() => {
//   //       setLoading(false);
//   //     });
//   // }, []);

//   useEffect(() => {
//     setLoading(true);

//     bagService
//       .getAll(userId)
//       .then((data) => {
//         const modifiedData = data.map((item) => ({
//           ...item,
//           increaseQuantityDisabled: item.inventoryQuantity === 0,
//           decreaseQuantityDisabled: item.quantity === 0,
//         }));

//         setBagItems(modifiedData);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [userId]);

//   const increaseBagItemTotalQuantityIntoState = (bagId) => {
//     setBagItems((state) =>
//       state.map((x) =>
//         x._id === bagId
//           ? {
//               ...x,
//               quantity: x.quantity + 1,
//               inventoryQuantity: x.inventoryQuantity - 1,
//               increaseQuantityDisabled: x.inventoryQuantity === 0,
//               decreaseQuantityDisabled: x.quantity === 0,
//             }
//           : x
//       )
//     );
//   };

//   const decreaseBagItemTotalQuantityIntoState = (bagId) => {
//     setBagItems((state) =>
//       state.map((x) =>
//         x._id === bagId
//           ? {
//               ...x,
//               quantity: x.quantity - 1,
//               inventoryQuantity: x.inventoryQuantity + 1,
//               increaseQuantityDisabled: x.inventoryQuantity > 0,
//               decreaseQuantityDisabled: x.quantity > 0,
//             }
//           : x
//       )
//     );
//   };

//   return {
//     loading,
//     bagItems,
//     increaseBagItemTotalQuantityIntoState,
//     decreaseBagItemTotalQuantityIntoState,
//   };
// };

export const useBag = () => {
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
            }
          : item
      );

      return updatedItems.filter((item) => item.quantity > 0);
    });
  };

  return {
    loading,
    bagItems,
    updateBagItemQuantityIntoState
  };
};
