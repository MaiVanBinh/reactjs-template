import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "../components/UI/Loader/Loader";
import ErrorBoundary from "./ErrorBoundary";

const publicRoutes = [
  // public router là routes trước khi login, gồm những routes nào thì mih list ra đây

  {
    path: "/",
    exact: true,
    component: lazy(() => import("./../pages/home/home")),
  },
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

// function PrivateRoute({ children, ...rest }) {
//   // private routes sẽ được định nghĩa trong PageRouter, giả sử như có nhiều tầng private router khác nhau thì trong PageRouter lại tiếp tục chia ra public router và private router
//   let location = useLocation();
//   const isLoggedIn = useSelector((state) => state.auth.token);
//   if (isLoggedIn) return <Route {...rest}>{children}</Route>;
//   return (
//     <Redirect
//       to={{
//         pathname: "/signin",
//         state: { from: location },
//       }}
//     />
//   );
// }

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
          {/* <PrivateRoute path="/">
            <Layout />
          </PrivateRoute> */}
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
};

export default RouteConfig;
