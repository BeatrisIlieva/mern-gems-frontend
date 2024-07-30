import { BagList } from "./BagList/BagList";
import { OrderSummary } from "./OrderSummary/OrderSummary";

import { ShoppingProcessContainer } from "../ShoppingProcessContainer";

import { useBagContext } from "../../../contexts/BagContext";

export const Bag = () => {
  const { bagItems } = useBagContext();

  return (
    <ShoppingProcessContainer title={"My Bag"}>
      <ul role="list">
        {bagItems.map((item) => (
          <li key={item.bagId}>
            <BagList {...item} />
          </li>
        ))}
      </ul>
      <OrderSummary path={"/checkout"}/>
    </ShoppingProcessContainer>
  );
};
