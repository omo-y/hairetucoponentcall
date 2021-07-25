import { Switch, Route } from "react-router-dom";
import { HOME } from "../HOME";
import { Page1Routes } from "./Page1Routes";
import { Page2 } from "../Page2";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HOME />
      </Route>
      <Route
        path="/Page1"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="/Page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
