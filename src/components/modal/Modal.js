import React from "react";
import { Fragment } from "react";
import styles from "./Modal.module.css";

const Modal = () => {
  return (
    <Fragment>
      <div className={styles.backdrop}></div>
      <div className={styles.overlay}></div>
    </Fragment>
  );
};
export default Modal;
