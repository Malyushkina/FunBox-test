import React from "react";
import Card from "../card";
import "./catalog.css";

const Catalog = ({ cards }) => {
  const elements = cards.map((item) => {
    if (typeof item === "object" && isEmpty(item)) {
      const { id, ...itemProps } = item;
      return (
        <div key={id} className="">
          <Card {...itemProps} />
        </div>
      );
    }
  });
  function isEmpty(obj) {
    for (let key in obj) {
      return true;
    }
    return false;
  }
  return <div className="cards">{elements}</div>;
};
export default Catalog;
