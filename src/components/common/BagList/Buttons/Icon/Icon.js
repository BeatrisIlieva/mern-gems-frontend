import { useState, useEffect, useRef } from "react";

import {DualTitleSection} from "../../../../reusable/DualTitleSection/DualTitleSection"
import { Content } from "./Content/Content";
import { MoveToWishlist } from "../MoveToWishlist/MoveToWishlist";
import { Remove } from "../Remove/Remove";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

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
    <div className={styles["wrapper"]}>
      <FontAwesomeIcon
        icon={faEllipsis}
        className={styles["icon"]}
        onClick={() => setDisplayContent(true)}
        ref={iconRef}
      />
      {displayContent && (
        <div className={styles["content"]}>
          <DualTitleSection  firstTitle={<MoveToWishlist/>} secondTitle={<FontAwesomeIcon icon={faHeart}/>}/>
          <DualTitleSection  firstTitle={<Remove/>} secondTitle={<FontAwesomeIcon icon={faTrashCan}/>}/>
        </div>
      )}
    </div>
  );
};
