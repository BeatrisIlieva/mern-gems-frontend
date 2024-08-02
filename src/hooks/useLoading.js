import { useState } from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleIsLoading = () => {
    setIsLoading((isLoading) => !isLoading);
  };

  return {
    isLoading,
    toggleIsLoading,
  };
};
