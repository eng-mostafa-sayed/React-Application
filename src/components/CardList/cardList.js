import React from "react";
import Card from "../Card/Card.js";

const CardList = ({ nameList, deleteHandler }) => {
  const cards = nameList.map(({ id, ...otherprops }) => (
    <Card key={id} {...otherprops} id={id} deleteHandler={deleteHandler} />
  ));
  return <>{cards}</>;
};

export default CardList;
