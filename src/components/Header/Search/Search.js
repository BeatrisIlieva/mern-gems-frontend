import { useState, useEffect } from "react";

import { useService } from "../../../hooks/useService";
import { searchServiceFactory } from "../../../services/searchService";
import { Popup } from "../../Popup/Popup";
import { JewelryListItem } from "../../JewelryListItem/JewelryListItem";

import { Icon } from "../../Icon/Icon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "./Search.module.css";

export const Search = ({ toggleDisplaySearchPopup }) => {
  const [query, setQuery] = useState("");
  const [jewelries, setJewelries] = useState([]);
  const searchService = useService(searchServiceFactory);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchJewelries = async () => {
      try {
        const result = await searchService.getAll(query);
        setJewelries(result);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchJewelries();
  }, [query, searchService]);

  return (
    <>
      <Popup
        isVisible
        variant={"search"}
        popupCloseHandler={toggleDisplaySearchPopup}
      >
        <section className={styles["search"]}>
          <form method="GET">
            <div className={styles["search-field"]}>
              <span>
                {" "}
                <Icon icon={faSearch} variant={"header"} />
              </span>
              <input
                value={query}
                onChange={onChange}
                type="text"
                placeholder="Search"
                className={styles["input"]}
                autoFocus
              />
            </div>
          </form>
          <div className={styles["jewelry-grid"]}>
            {jewelries.map((j) => (
              <JewelryListItem key={j._id} {...j} />
            ))}
          </div>
        </section>
      </Popup>
    </>
  );
};
