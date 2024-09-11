import { useEffect, useState, useRef } from "react";

export const usePopup = ({ toggleDisplayPopup, displayPopup }) => {
  const popupRef = useRef(null);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const popupCloseHandler = () => {
    return new Promise((resolve) => {
      setIsTransitioning(true);

      setTimeout(() => {
        toggleDisplayPopup();
        setIsTransitioning(false);
        resolve();
      }, 400);
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        popupCloseHandler();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        popupCloseHandler();
      }
    };

    if (displayPopup) {
      document.addEventListener("mousedown", handleClickOutside);

      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);

      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [displayPopup]);

  return { isTransitioning, popupRef, popupCloseHandler };
};
