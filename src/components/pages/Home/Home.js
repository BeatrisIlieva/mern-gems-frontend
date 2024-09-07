import { useEffect } from "react";

import { Authentication } from "./Authentication/Authentication";
import { HeroBanner } from "./HeroBanner/HeroBanner";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

export const Home = () => {
  const { isAuthenticated } = useAuthenticationContext();

  return (
    <>
      {!isAuthenticated && <Authentication />}
      <HeroBanner />
    </>
  );
};
