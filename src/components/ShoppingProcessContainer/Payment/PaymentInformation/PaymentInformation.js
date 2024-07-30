import { useState } from "react";

import { PaymentForm } from "./PaymentForm/PaymentForm";
import { OrderConfirmation } from "./OrderConfirmation/OrderConfirmation";

export const PaymentInformation = () => {
  const [paymentIsIsCompleted, setPaymentCompleted] = useState(false);

  const updatePaymentIsCompleted = () => {
    setPaymentCompleted(true);
  };

  return (
    <>
      {paymentIsIsCompleted && <OrderConfirmation />}
      <PaymentForm updatePaymentIsCompleted={updatePaymentIsCompleted} />
    </>
  );
};
