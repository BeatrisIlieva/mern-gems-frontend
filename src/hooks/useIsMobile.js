import { useState, useEffect } from "react";

export const useIsMobile = () => {
  const [isReversed, setIsReversed] = useState(window.innerWidth <= 603);

  const handleResize = () => {
    setIsReversed(window.innerWidth <= 603);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isReversed };
};
