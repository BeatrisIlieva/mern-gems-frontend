import { useState, useEffect, useRef } from "react";

import { Remove } from "./Remove/Remove";
import { MoveToWishlist } from "./MoveToWishlist/MoveToWishlist";
import { DualTitleSection } from "../../../reusable/DualTitleSection/DualTitleSection";
import { Icon } from "./Icon/Icon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import styles from "./Buttons.module.css";

export const Buttons = ({ bagId }) => {
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
      <div className={styles["buttons-wrapper"]}>
        <MoveToWishlist />
        <Remove bagId={bagId} />
      </div>
      <div className={styles["icon-wrapper"]} ref={iconRef}>
        <FontAwesomeIcon
          icon={faEllipsis}
          className={styles["icon"]}
          onClick={() => setDisplayContent(true)}
        />
        {displayContent && (
          <div className={styles["content"]}>
            <DualTitleSection
              firstTitle={<MoveToWishlist />}
              secondTitle={<FontAwesomeIcon icon={faHeart} />}
            />
            <DualTitleSection
              firstTitle={<Remove bagId={bagId} />}
              secondTitle={<FontAwesomeIcon icon={faTrashCan} />}
            />
          </div>
        )}
      </div>
    </>
  );
};
