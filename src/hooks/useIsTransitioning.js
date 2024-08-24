import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useBagContext } from "../contexts/BagContext";

export const useIsTransitioning = () => {
  const location = useLocation();

  const [isTransitioning, setIsTransitioning] = useState(false);

  const { bagTotalQuantity } = useBagContext();

  useEffect(() => {
    setIsTransitioning(true);

    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return { isTransitioning, setIsTransitioning };
};
