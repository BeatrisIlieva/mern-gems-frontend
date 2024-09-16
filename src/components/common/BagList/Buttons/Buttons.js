import { useState, useEffect, useRef, memo } from "react";

import { Remove } from "./Remove/Remove";
import { MoveToWishlist } from "./MoveTo/MoveTo";
import { DualTitleSection } from "../../../reusable/DualTitleSection/DualTitleSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import styles from "./Buttons.module.css";

export const Buttons = memo(({ bagId, categoryId, colorId }) => {
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
        <MoveToWishlist
          bagId={bagId}
          categoryId={categoryId}
          colorId={colorId}
        />
        <Remove bagId={bagId} />
      </div>
      <div className={styles["icon-wrapper"]} ref={iconRef}>
        <FontAwesomeIcon
          data-testid="icon"
          icon={faEllipsis}
          className={styles["icon"]}
          onClick={() => setDisplayContent(true)}
        />
        {displayContent && (
          <div className={styles["content"]}>
            <DualTitleSection
              firstTitle={
                <MoveToWishlist
                  bagId={bagId}
                  categoryId={categoryId}
                  colorId={colorId}
                />
              }
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
});
