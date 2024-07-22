import { Collection } from "../Collection/Collection";
import { collectionItems } from "../Collection/collectionItems";
import { HorizontalLine } from "../HorizontalLine/HorizontalLine";
import { Authentication } from "../User/Authentication/Authentication";

import styles from "./Home.module.css";

export const Home = () => {
  const isAuthenticated = false;
  return (
    <>
      <Authentication />
      <section className={styles["hero"]}>
        {collectionItems.map((item, index) => (
          <div key={item.imageUrl}>
            <Collection
              path={item.path}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              variant={index % 2 === 0 ? "hero-box" : "hero-box-reverse"}
            />
            {index < collectionItems.length - 1 && (
              <HorizontalLine key={`line-${index}`} variant={"small"} />
            )}
          </div>
        ))}
      </section>
    </>
  );
};
