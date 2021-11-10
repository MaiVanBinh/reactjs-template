import React, { Suspense, lazy } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import Loader from "../components/UI/Loader/Loader";
import ErrorBoundary from "./ErrorBoundary";
import { useSelector } from "react-redux";

const PrivateRoutes = [
  {
    path: "/products",
    exact: true,
    component: lazy(() => import("./../pages/products/Products")),
  },
  {
    path: "/products-create",
    exact: true,
    component: lazy(() => import("../pages/productsCreate/ProductCreate")),
  }
];

const publicRoutes = [
  // public router là routes trước khi login, gồm những routes nào thì mih list ra đây
  {
    path: "/sign-in",
    exact: true,
    component: lazy(() => import("./../pages/signIn/signIn")),
  },
];

// signin/SignIn Admin/AdminPage

function PrivateRoute({ children, ...rest }) {
  // private routes sẽ được định nghĩa trong PageRouter, giả sử như có nhiều tầng private router khác nhau thì trong PageRouter lại tiếp tục chia ra public router và private router
  let location = useLocation();

  // token from  redux
  const accessToken = useSelector((state) => state.token);
  // console.log();

  // check login
  const isLoggedIn = accessToken ? true : false;
  if (isLoggedIn) return <Route {...rest}>{children}</Route>;
  return (
    <Redirect
      to={{
        pathname: "/sign-in",
        state: { from: location },
      }}
    />
  );
}

const RouteConfig = (props) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Switch>
          {publicRoutes.map((route, index) => {
            return (
              <Route key={index} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            );
          })}
          <PrivateRoute path="/">
            {PrivateRoutes.map((route, index) => {
              return (
                <Route key={index} path={route.path} exact={route.exact}>
                  <route.component />
                </Route>
              );
            })}
          </PrivateRoute>
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
};

export default RouteConfig;
