import React from "react";
import styles from "./Card.module.css";

const Card = ({ id, name, age, phone, address, type, deleteHandler }) => {
  return (
    <div
      className={styles.cardWrapper}
      style={{
        background: type === "girl" ? "pink" : "green",
        fontWeight: "bold",
      }}
    >
      <div> Name: {name} </div>
      <div> phone: {phone} </div>
      <div> age:{age}</div>
      <div>address:{address}</div>
      <div>type:{type}</div>
      <div className={styles.deleteBtn} onClick={(e) => deleteHandler(e, id)}>
        x
      </div>
    </div>
  );
};

export default Card;
