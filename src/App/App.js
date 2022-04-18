import React, { Fragment, useState, useRef } from "react";
import styles from "./App.module.css";
import CardList from "../components/CardList/cardList.js";
import Filter from "../components/Filter/Filter.js";
import Modal from "../components/modal/Modal.js";
const App = () => {
  const inputEl = useRef(null);
  const [filter, setFilter] = useState("");
  const [cardToggle, setCardToggle] = useState(true);
  const [state, setState] = useState([
    {
      id: 1,
      name: "mostafa",
      age: 52,
      address: "giza",
      phone: "222319433325",
      type: "boy",
    },
    {
      id: 2,
      name: "lora",
      age: 76,
      address: "benha",
      phone: "2233231625",
      type: "girl",
    },
    {
      id: 3,
      name: "sayed",
      age: 23,
      address: "cairo",
      phone: "223213344325",
      type: "boy",
    },
    {
      id: 4,
      name: "omar",
      age: 43,
      address: "benha",
      phone: "2233231625",
      type: "boy",
    },
    {
      id: 5,
      name: "camela",
      age: 12,
      address: "benha",
      phone: "2233231625",
      type: "girl",
    },
    {
      id: 6,
      name: "semon",
      age: 43,
      address: "benha",
      phone: "2233231625",
      type: "girl",
    },
  ]);

  //delete card and update the state
  const deleteHandler = (e, selectedID) => {
    // const deleteOpertation = state.filter((el, idx) => idx !== clickedIdx);
    // setState(deleteOpertation);
    setState((prevState) => {
      return prevState.filter((el) => el.id !== selectedID);
    });
  };

  //to show and hide the cards
  const toggleHandeler = () => {
    setCardToggle(!cardToggle);
  };

  ///search button{}
  const searchButton = () => {
    inputEl.current.focus();
  };

  //get the filter value from filter component
  const filterName = (name) => {
    setFilter(name);
  };

  const namesHandler = () => {
    if (filter.length !== 0) {
      return state.filter((el) => el.name.includes(filter));
    }
    return state;
  };

  return (
    <Fragment>
      <React.StrictMode>
        <div className={styles.mainContainer}>
          <Modal />
          <h1>list of data</h1>
          <button style={{ marginBottom: "20px" }} onClick={toggleHandeler}>
            {cardToggle ? "hide Names" : "show Names"}
          </button>
          <div className={cardToggle ? styles.show : styles.hide}>
            <Filter filteration={filterName} />
            <button onClick={searchButton}>Find </button>
            <CardList nameList={namesHandler()} deleteHandler={deleteHandler} />
          </div>
        </div>
      </React.StrictMode>
    </Fragment>
  );
}; ///////////////////////////////////////////////////////////////////////////in vid 33

export default App;
