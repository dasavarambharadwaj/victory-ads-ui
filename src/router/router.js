import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/search",
    component:List,
  },
  {
    path: "/add-business",
    component:AddBusiness,
    
  }
];
export default function PlaceRouter() {
  return (
    <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
    </Router>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}