import { Link } from "react-router-dom";

import { Paragraph } from "../Paragraph/Paragraph";
import { LargeTitle } from "../LargeTitle/LargeTitle";
import { Button } from "../reusable/Button/Button";
import { collectionItems } from "./collectionItems";

import styles from "./Collection.module.css";

export const Collection = () => {
  return (
    <section className={styles["collection"]}>
      {collectionItems.map((item, index) => (
        <div key={item.imageUrl} className={styles["wrapper"]}>
          <Link to={item.path} className={styles["no-decoration"]}>
            <div
              className={
                index % 2 === 0
                  ? styles["hero-box"]
                  : styles["hero-box-reverse"]
              }
            >
              <div className={styles["hero-text"]}>
                <LargeTitle title={`${item.title} Collection`} />
                <Paragraph text={item.description} />
                <Button title={"Discover"} variant={"animated"} />
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
        </div>
      ))}
    </section>
  );
};
