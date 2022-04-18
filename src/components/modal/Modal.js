import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import styles from "./Modal.module.css";

const Backdrop = () => {
  return <div className={styles.backdrop}></div>;
};

const Overlay = () => {
  return <div className={styles.overlay}></div>;
};

const Modal = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <Backdrop />
          <Overlay />
        </Fragment>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};
export default Modal;
