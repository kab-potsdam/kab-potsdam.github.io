import { Link, Route, Router, Redirect, Switch, withRouter } from "./navigation";
import { INavigation } from "./types";

export * from "./types";

const Navigation: INavigation = {
  Link,
  Route,
  Router,
  Redirect,
  Switch,
  withRouter,
};

export default Navigation;
