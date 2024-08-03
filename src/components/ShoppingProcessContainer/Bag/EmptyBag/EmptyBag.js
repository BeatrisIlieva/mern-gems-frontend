import { Collection } from "../../../Collection/Collection";

import { InfoMessage } from "../../../InfoMessage/InfoMessage";

export const EmptyBag = () => {
  return (
    <>
      <InfoMessage
        title={"Your Shopping Bag is Empty."}
        subtitle={"Explore and add something you love."}
      />
      <Collection />
    </>
  );
};
