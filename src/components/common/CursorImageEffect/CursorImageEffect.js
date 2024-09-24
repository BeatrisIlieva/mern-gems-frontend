import React, { useState, useEffect } from 'react';
import styles from "./CursorImageEffect.module.css"
import cursorImage from "../../../assets/images/xmark.png"

export const CursorImageEffect = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Update cursor position
  const updateCursorPosition = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  // Adjust these offsets based on the image size
  const imageOffsetX = 25; // Half of image width (50px)
  const imageOffsetY = 25; // Half of image height (50px)

  return (
    <div className={styles["cursor-container"]}>
      <img
        src={cursorImage} // Replace with your image path
        alt="cursor image"
        className={styles["cursor-image"]}
        style={{
          transform: `translate(${cursorPos.x - imageOffsetX}px, ${cursorPos.y - imageOffsetY}px)`
        }}
      />

    </div>
  );
};

