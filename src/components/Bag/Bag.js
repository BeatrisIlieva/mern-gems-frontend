import { BagList } from "./BagList/BagList";

import { ShoppingProcessContainer } from "../ShoppingProcessContainer/ShoppingProcessContainer";

import { useBagContext } from "../../contexts/BagContext";

export const Bag = () => {
  const { bagItems } = useBagContext();

  return (
    <ShoppingProcessContainer title={"My Bag"}>
      <ul role="list">
        {bagItems.map((item) => (
          <li key={item._id}>
            <BagList {...item} />
          </li>
        ))}
      </ul>
      <h1>Bag</h1>
    </ShoppingProcessContainer>
  );
};
