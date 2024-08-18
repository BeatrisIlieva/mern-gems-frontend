import { useEffect } from "react";

import { Authentication } from "./Authentication/Authentication";
import { Jewelry } from "./Jewelry/Jewelry";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

export const Home = () => {
  const { isAuthenticated } = useAuthenticationContext();

  useEffect(() => {
    if (isAuthenticated) {
      document.body.style.overflow = "visible";
    }
  });

  return (
    <>
      {!isAuthenticated && <Authentication />}
      <Jewelry />
    </>
  );
};
