import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useIsTransitioning = () => {
  const location = useLocation();

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);

    const timeout = setTimeout(() => {
      setIsTransitioning(false);
  }, 800);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return { isTransitioning, setIsTransitioning };
};
