import { useState, useEffect } from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  // const toggleIsLoading = () => {
  //   setIsLoading((isLoading) => !isLoading);

  //   setTimeout(() => {
  //     setIsLoading((isLoading) => !isLoading);
  //   }, 2000);
  // };

  const toggleIsLoading = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };


  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return {
    isLoading,
    toggleIsLoading,
  };
};
