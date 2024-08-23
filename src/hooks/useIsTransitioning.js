import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useIsTransitioning = () => {
  const location = useLocation();

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Set transitioning to true immediately
    setIsTransitioning(true);

    // Set transitioning to false after 400ms to allow the animation to complete
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);

    // Cleanup timeout on unmount or when location changes
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return { isTransitioning };
};
