import { BagList } from "./BagList/BagList";

import { ShoppingProcessContainer } from "../ShoppingProcessContainer/ShoppingProcessContainer";
import { useBag } from "../../hooks/useBag";

export const Bag = () => {
  const { bagItems } = useBag();

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
