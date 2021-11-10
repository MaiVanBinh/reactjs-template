import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { NavLink, useHistory, useLocation } from "react-router-dom";

const Navigation = () => {
  const [pages, setPage] = useState(1);
  const history = useHistory();

  const changePage = (pageRoute) => {
    history.push(pageRoute);
  };

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/products") setPage(1);
    else if (location.pathname === "/products-create") setPage(2);
    else if (location.pathname === "/sign-in") setPage(3);
    else setPage(0);
  }, [location]);

  return (
    <>
      <ul className="nav">
        <li onClick={() => changePage("/products")}>
          <NavLink to="/products" activeClassName={pages === 1 ? "active" : ""}>
            Products
          </NavLink>
        </li>
        <li onClick={() => changePage("/products-create")}>
          <NavLink to="/products-create" activeClassName={pages === 2 ? "active" : ""}>
            Create
          </NavLink>
        </li>

        <li style={{ float: "right" }} onClick={() => changePage("/sign-in")}>
          <NavLink to="/sign-in" activeClassName={pages === 3 ? "active" : ""}>
            SignIn
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
