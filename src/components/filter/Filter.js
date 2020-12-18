import React from "react";
import styles from "./Filter.module.css";

export default function Filter({ value, searchContact }) {
  return (
    <label>
      Find contact by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={value}
        placeholder="Пошук"
        onChange={(e) => searchContact(e.target.value)}
      ></input>
    </label>
  );
}
