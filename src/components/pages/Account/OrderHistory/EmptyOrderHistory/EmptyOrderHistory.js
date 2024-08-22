import { InfoMessage } from "../../../../reusable/InfoMessage/InfoMessage";

export const EmptyOrderHistory = () => {
  return (
    <>
      <InfoMessage
        title={"You have no orders"}
        subtitle={"Explore and add something you love."}
      />
    </>
  );
};
