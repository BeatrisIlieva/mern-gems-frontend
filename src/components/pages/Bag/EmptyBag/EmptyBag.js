import { Collection } from "../../../common/Collection/Collection";

import { InfoMessage } from "../../../reusable/InfoMessage/InfoMessage";

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
