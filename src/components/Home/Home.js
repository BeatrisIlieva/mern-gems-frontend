import { Collection } from "../Collection/Collection";
import { collectionItems } from "../Collection/collectionItems";
import { HorizontalLine } from "../HorizontalLine/HorizontalLine";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <section className={styles["hero"]}>
      {collectionItems.map((item, index) => (
        <>
          <Collection
            key={item.imageUrl}
            path={item.path}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            variant={index % 2 === 0 ? "hero-box" : "hero-box-reverse"}
          />
          {index < collectionItems.length - 1 && (
            <HorizontalLine key={index} variant={"small"} />
          )}
        </>
      ))}
    </section>
  );
};
