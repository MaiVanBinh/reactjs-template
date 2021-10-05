import React, { useEffect } from "react";
import "./TopMenu.css";

const TopMenu = (props) => {
  const { productsFilter, currentFilter, changeFilter } = props;

  return (
    <ul className="filter">
      {productsFilter.map((e) => (
        <li key={e} className={"list" + (e === currentFilter ? " active" : "")} onClick={() => changeFilter(e)}>{e}</li>
      ))}
      {/*       
      <li className="list" data-filter="Watch">
        Watch
      </li>
      <li className="list" data-filter="Handbag">
        Handbag
      </li>
      <li className="list" data-filter="Shirts">
        Shirts
      </li>
      <li className="list" data-filter="+">
        +
      </li> */}
    </ul>
  );
};

export default TopMenu;
