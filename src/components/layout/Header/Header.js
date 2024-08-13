import { useLocation } from "react-router-dom";

import { MainHeader } from "./MainHeader/MainHeader";
import { MiniHeader } from "./MiniHeader/MiniHeader";

export const Header = () => {
  const location = useLocation();

  const isCheckoutOrPaymentLocation =
    location.pathname === "/checkout" || location.pathname === "/payment";

  return isCheckoutOrPaymentLocation ? <MiniHeader /> : <MainHeader />;
};
