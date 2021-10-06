import React from "react";
import "./TopMenu.css";

const TopMenu = (props) => {
  const { productsFilter, currentFilter, changeFilter } = props;

  return (
    <ul className="filter">
      {productsFilter.map((e) => (
        <li key={e} className={"list" + (e === currentFilter ? " active" : "")} onClick={() => changeFilter(e)}>{e}</li>
      ))}
    </ul>
  );
};

export default TopMenu;
