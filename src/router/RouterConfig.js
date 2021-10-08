import React, { Suspense, lazy } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import Loader from "../components/UI/Loader/Loader";
import ErrorBoundary from "./ErrorBoundary";
const PrivateRoutes = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import("./../pages/home/home")),
  },
];
const publicRoutes = [
  // public router là routes trước khi login, gồm những routes nào thì mih list ra đây

  {
    path: "/products",
    exact: true,
    component: lazy(() => import("./../pages/products/Products")),
  },
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

  // check login
  const isLoggedIn = true;
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
