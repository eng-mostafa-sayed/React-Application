import React, { useState } from "react";
import styles from "./Filter.module.css";

const Filter = ({ filteration }) => {
  const [filter, setFilter] = useState("");
  //to search
  const filterHandler = (e) => {
    let name = e.target.value;
    setFilter(name);
    filteration(name);
  };
  return (
    <div className={styles.mb}>
      <input
        type="text"
        placeholder="filter by name"
        value={filter}
        onChange={filterHandler}
      ></input>
    </div>
  );
};

export default Filter;
