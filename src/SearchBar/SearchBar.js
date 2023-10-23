import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar(props) {
  const [term, setTerm] = useState(props.term || "");
  const [location, setLocation] = useState(props.location || "");

  function submit(e) {
    if (typeof props.search === "function") {
      props.search(term, location);
    }
    console.log(term, location);
    e.preventDefault();
  }

  const sizeClass = props.small ? "" : "is-medium";
  return (
    <form onSubmit={submit}>
      <div
        className="field has-addons"
        style={{ display: "flex", alignItems: "center" }}
      >
        <p className={styles.control} style={{ backgroundColor: "#F5F5F5" }}>
          <div
            className={`button is-static ${sizeClass}`}
            style={{ color: "#7A7A7A" }}
          >
            Search
          </div>
        </p>
        <p className={styles.control}>
          <input
            className={`input ${sizeClass} ${styles["input-control"]}`}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            value={term}
            placeholder="e.g. Chinese, Japanese, Burger, Pizza"
          />
        </p>

        <p className={styles.control} style={{ backgroundColor: "#F5F5F5" }}>
          <div
            className={`button is-static ${sizeClass}`}
            style={{ color: "#7A7A7A" }}
          >
            Near
          </div>
        </p>
        <p className={styles.control}>
          <input
            className={`input ${sizeClass} ${styles["input-control"]}`}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            value={location}
            placeholder="where"
          />
        </p>

        <button
          className={`button ${sizeClass} ${styles["search-button"]}`}
          onClick={submit}
        >
          <span>
            <SearchIcon
              className={`icon is-small ${styles["search-icon"]}`}
            ></SearchIcon>
          </span>
        </button>
      </div>
    </form>
  );
}
