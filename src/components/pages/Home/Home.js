import { memo } from "react";

import { Authentication } from "./Authentication/Authentication";
import { HeroBanner } from "./HeroBanner/HeroBanner";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

const Home = () => {
  const { isAuthenticated } = useAuthenticationContext();

  return (
    <>
      {!isAuthenticated && <Authentication />}
      <HeroBanner />
    </>
  );
};

export default memo(Home);
