import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navigation = () => {
  const [pages, setPage] = useState(1);
  const history = useHistory();

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const changePage = (pageRoute) => {
    history.push(pageRoute);
  };

  const logOut = () => dispatch({ type: "SIGN_OUT" });

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/products") setPage(1);
    else if (location.pathname === "/sign-in") setPage(2);
    else setPage(0);
  }, [location]);

  return (
    <>
      <ul className="nav">
        <li onClick={() => changePage("/")}>
          <NavLink to="/" activeClassName={pages === 0 ? "active" : ""}>
            Home-Private
          </NavLink>
        </li>
        <li onClick={() => changePage("/products")}>
          <NavLink to="/products" activeClassName={pages === 1 ? "active" : ""}>
            Products
          </NavLink>
        </li>

        {user && user.accessToken ? (
          <li style={{ float: "right" }} onClick={() => changePage("/sign-in")}>
            <NavLink
              to="/sign-in"
              activeClassName={pages === 2 ? "active" : ""}
              onClick={logOut}
            >
              SignOut
            </NavLink>
          </li>
        ) : (
          <li style={{ float: "right" }} onClick={() => changePage("/sign-in")}>
            <NavLink
              to="/sign-in"
              activeClassName={pages === 2 ? "active" : ""}
            >
              SignIn
            </NavLink>
          </li>
        )}
      </ul>
    </>
  );
};

export default Navigation;
