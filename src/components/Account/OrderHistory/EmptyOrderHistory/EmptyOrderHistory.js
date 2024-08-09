import { InfoMessage } from "../../../InfoMessage/InfoMessage";
import { Collection } from "../../../Collection/Collection";

export const EmptyOrderHistory = () => {
  return (
    <>
      <InfoMessage
        title={"You have no orders"}
        subtitle={"Explore and add something you love."}
      />
      <Collection />
    </>
  );
};
