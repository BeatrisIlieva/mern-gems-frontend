import { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import styles from "./Icon.module.css";

export const Icon = () => {
  const [displayContent, setDisplayContent] = useState(false);

  const iconRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (iconRef.current && !iconRef.current.contains(event.target)) {
        setDisplayContent(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [iconRef]);

  return (
    <>
      <FontAwesomeIcon
        icon={faEllipsis}
        className={styles["icon"]}
        onClick={() => setDisplayContent(true)}
        ref={iconRef}
      />
      {displayContent && <div>"Content"</div>}
    </>
  );
};
