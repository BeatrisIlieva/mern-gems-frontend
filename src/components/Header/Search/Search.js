// import { useState, useEffect } from "react";

// import { useService } from "../../../hooks/useService";

// import { searchServiceFactory } from "../../../services/search";

// import { Popup } from "../../Popup/Popup";

// import { JewelryListItem } from "../../JewelryListItem/JewelryListItem";

// import styles from "./Search.module.css"

// export const Search = ({toggleDisplaySearchPopup, displaySearchPopup}) => {
//   const [query, setQuery] = useState(null);

//   const [jewelries, setJewelries] = useState([]);

//   const searchService = useService(searchServiceFactory);

//   const onChange = async (e) => {
//     setQuery(e.target.value);
//   };

//   useEffect(() => {
//     searchService
//       .getAll(query)
//       .then(setJewelries)
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, [query]);

//   useEffect(() => {
//     document.body.style.overflow === "hidden"
//     ? (document.body.style.overflow = "visible")
//     : (document.body.style.overflow = "hidden");
//   }, [query])

//   return (
//     <>
//       {/* {displaySearchPopup && ( */}
//         <Popup
//           isVisible
//           variant={"search"}
//           popupCloseHandler={toggleDisplaySearchPopup}
//         >

//           <section className={styles["search"]}>
//             <form method="GET">
//               <input
//                 value={query}
//                 onChange={onChange}
//                 type="text"
//                 className={`${styles["search-input"]} ${styles["custom-placeholder"]}`}
//                 placeholder="Search"
//               />
//             </form>
//             <div className={styles["jewelry-grid"]}>
//               {jewelries.map((j) => (
//                 <JewelryListItem key={j._id} {...j}/>
//               ))}
//             </div>
//           </section>
//         </Popup>
//       {/* )} */}
//     </>
//   );
// };

import { useState, useEffect } from "react";

import { useService } from "../../../hooks/useService";
import { searchServiceFactory } from "../../../services/search";
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

  useEffect(() => {
    document.body.style.overflow === "hidden"
      ? (document.body.style.overflow = "visible")
      : (document.body.style.overflow = "hidden");
  }, [query]);

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
