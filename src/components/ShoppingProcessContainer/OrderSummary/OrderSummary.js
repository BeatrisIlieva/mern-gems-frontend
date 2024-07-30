import { useBagContext } from "../../../contexts/BagContext";

import { BagList } from "../Bag/BagList/BagList";

export const OrderSummary = () => {
  const { bagItems } = useBagContext();

  return (
    <ul role="list">
      {bagItems.map((item) => (
        <li key={item._id}>
          <BagList {...item} />
        </li>
      ))}
    </ul>
  );
};
