import React, { useState } from "react";
import "./Navigation.css";
import { NavLink, useHistory } from "react-router-dom";

const Navigation = () => {
  const [pages, setPage] = useState(1);
  const history = useHistory();

  const changePage = (pageRoute) => {
    history.push(pageRoute);
    if (pageRoute === "/products") setPage(1);
    else if (pageRoute === "/sign-in") setPage(2);
    else setPage(0);
  };

  return (
    <>
      <ul className="nav">
        <li onClick={() => changePage("/")}>
          <NavLink to="/" activeClassName={pages === 0 ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li onClick={() => changePage("/products")}>
          <NavLink to="/products" activeClassName={pages === 1 ? "active" : ""}>
            Products
          </NavLink>
        </li>

        <li style={{ float: "right" }} onClick={() => changePage("/sign-in")}>
          <NavLink to="/sign-in" activeClassName={pages === 2 ? "active" : ""}>
            SignIn
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
