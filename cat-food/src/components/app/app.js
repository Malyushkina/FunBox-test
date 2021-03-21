import React from "react";
import AppHeader from "../app-header";
import Catalog from "../catalog";
import "./app.css";

const App = () => {
  const data = [
    {
      id: "jhkjh",
      name: "с фуа-гра",
      quantity: 10,
      gift: 1,
      weight: 0.5,
      offer: "Печень утки разварная с артишоками.",
      disabled: false,
    },
    {
      id: "fju",
      name: "с рыбой",
      quantity: 40,
      gift: 2,
      weight: 2,
      offer: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      disabled: false,
    },
    {
      id: "gkil",
      name: "с курой",
      quantity: 40,
      gift: 2,
      weight: 5,
      offer: "Филе из цыплят с трюфелями в бульоне.",
      disabled: true,
    },
    {
      id: "otuol",
      name: "с курой",
      quantity: 40,
      gift: 2,
      weight: 2,
      offer: "Филе из цыплят с трюфелями в бульоне.",
      disabled: false,
    },
  ];
  return (
    <div className="page-body">
      <h1 className="visually-hidden">Корм для кошек Нямушка</h1>
      <div className="container">
        <AppHeader />
        <Catalog className="catalog" cards={data} />
      </div>
    </div>
  );
};

export default App;
