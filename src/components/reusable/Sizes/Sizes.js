import { useState, useEffect, memo } from "react";
import { useLocation } from "react-router-dom";

import { NormalTitle } from "../NormalTitle/NormalTitle";

import { useLanguageContext } from "../../../contexts/LanguageContext";

import { SIZE_FORM_KEY } from "../../../constants/sizeFormKey";
import { SIZE_NAMING } from "../../../constants/languageRelated";

import styles from "./Sizes.module.css";

export const Sizes = memo(
  ({ inventories, errorMessage, changeHandler, selectedSize, containerDirection }) => {
    const { language } = useLanguageContext();

    const [hoveredLabel, setHoveredLabel] = useState("");

    const location = useLocation();

    useEffect(() => {
      setHoveredLabel("");
    }, [location.pathname, inventories]);

    return (
      <div className={styles["size-wrapper"]}>
        <NormalTitle title={SIZE_NAMING[language]} variant={"bolded"} />
        <div className={`${styles["radio-container"]} ${styles[containerDirection]}`}>
          {inventories.map((item) => (
            <div key={item.size} className={styles["wrapper"]}>
              <input
                type="radio"
                name={SIZE_FORM_KEY.Size}
                id={item.size}
                value={item.size}
                onChange={changeHandler}
                onClick={changeHandler}
                checked={item.size === selectedSize}
                disabled={item.quantity === 0}
              />
              <label
                onMouseEnter={() => setHoveredLabel(item.size)}
                onMouseLeave={() => setHoveredLabel("")}
                onTouchStart={() => setHoveredLabel(item.size)}
                onTouchEnd={() => setHoveredLabel("")}
                className={`${styles["label"]} ${
                  hoveredLabel === item.size ? styles["hovered"] : ""
                }`.trim()}
                htmlFor={item.size}
              >
                {item.size}
              </label>
              <NormalTitle title={`$${item.price}`} variant={"bolded"} />
            </div>
          ))}
        </div>
        <div className={styles["error-message"]} data-testid="error-message">
          {errorMessage}
        </div>
      </div>
    );
  }
);
