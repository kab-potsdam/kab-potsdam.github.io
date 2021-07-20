import {
  HashRouter as Router,
  Link,
  Route,
  RouteComponentProps,
  Redirect,
  Switch,
  withRouter,
} from "react-router-dom";

export type RouteProps = RouteComponentProps;

export interface INavigation {
  Link: typeof Link;
  Route: typeof Route;
  Router: typeof Router;
  Redirect: typeof Redirect;
  withRouter: typeof withRouter;
  Switch: typeof Switch;
}
