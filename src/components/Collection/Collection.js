import { Link } from "react-router-dom";

import { AnimatedButton } from "../AnimatedButton/AnimatedButton";

import { collectionItems } from "./collectionItems";

import { HorizontalLine } from "../HorizontalLine/HorizontalLine";

import styles from "./Collection.module.css";

export const Collection = () => {
  return (
    <section className={styles["collection"]}>
      {collectionItems.map((item, index) => (
        <div key={item.imageUrl}>
          <Link to={item.path} className={styles["no-decoration"]}>
            <div
              className={
                index % 2 === 0
                  ? styles["hero-box"]
                  : styles["hero-box-reverse"]
              }
            >
              <div className={styles["hero-text"]}>
                <h2 className={styles["title"]}>{item.title} Collection</h2>
                <p className={styles["paragraph"]}>{item.description}</p>
                <AnimatedButton title={"Discover"} />
              </div>
              <div className={styles["hero-img-container"]}>
                <img
                  className={styles["hero-img"]}
                  src={item.imageUrl}
                  alt={item.title}
                />
              </div>
            </div>
          </Link>
          {index < collectionItems.length - 1 && (
            <HorizontalLine key={`line-${index}`} variant={"small"} />
          )}
        </div>
      ))}
    </section>
  );
};
