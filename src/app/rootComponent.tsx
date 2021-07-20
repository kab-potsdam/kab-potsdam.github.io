import React from "react";

import { Navigation } from "../lib";
import { HomeScreen, OverviewScreen, DetailScreen } from "../screens";


/** The root component. */
export default class RootComponent extends React.Component<{}> {
  protected isCurrentlyMounted = false;

  public componentDidMount() {
    this.isCurrentlyMounted = true;
  }

  public componentWillUnmount() {
    this.isCurrentlyMounted = false;
  }


  public render() {
    return (
      <Navigation.Router>
        <>
          <Navigation.Switch>
            <Navigation.Route exact path="/hospitals">
              <OverviewScreen item="hospitals"/>
            </Navigation.Route>
            <Navigation.Route exact path="/pediatricians">
              <OverviewScreen item="pediatricians"/>
            </Navigation.Route>
            <Navigation.Route path="/pediatricians/:id">
              <DetailScreen item="pediatricians" />
            </Navigation.Route>
            <Navigation.Route exact path="/home">
              <HomeScreen />
            </Navigation.Route>
            <Navigation.Route>
              <Navigation.Redirect to="/home" />
            </Navigation.Route>
          </Navigation.Switch>
        </>
      </Navigation.Router>
    );
  }
}
