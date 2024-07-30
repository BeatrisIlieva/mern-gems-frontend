import { useState, useEffect } from "react";

import { PaymentForm } from "./PaymentForm/PaymentForm";
import { OrderConfirmation } from "./OrderConfirmation/OrderConfirmation";

export const PaymentInformation = () => {
  const [
    displayOrderConfirmationPopup,
    setDisplayOrderConfirmationPopup,
  ] = useState(false);

  const toggleDisplayOrderConfirmationPopup = () => {
    setDisplayOrderConfirmationPopup(
      (displayOrderConfirmationPopup) =>
        !displayOrderConfirmationPopup
    );
  };

  return (
    <>
      {displayOrderConfirmationPopup && (
        <OrderConfirmation
        toggleDisplayOrderConfirmationPopup={toggleDisplayOrderConfirmationPopup}
        />
      )}
      <PaymentForm toggleDisplayOrderConfirmationPopup={toggleDisplayOrderConfirmationPopup} />
    </>
  );
};
