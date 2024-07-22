import { useState } from "react";
import { Collection } from "../Collection/Collection";
import { collectionItems } from "../Collection/collectionItems";
import { HorizontalLine } from "../HorizontalLine/HorizontalLine";
import { Popup } from "../Popup/Popup";

import styles from "./Home.module.css";

export const Home = () => {
  const isAuthenticated = false;

  const [isPopupVisible, setIsPopupVisible] = useState(!isAuthenticated);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <Popup isVisible={isPopupVisible}>
        <h1>This is the Popup Content</h1>
        <p>Here you can render any component or content dynamically.</p>
        <button onClick={togglePopup}>Close</button>
      </Popup>
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
