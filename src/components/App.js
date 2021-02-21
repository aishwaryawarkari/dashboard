import React from "react";
import { Route, Switch } from "react-router-dom";
import SideDrawer from "./SideDrawer";
import Home from "./Home";
import NodataComponent from "./NodataComponent";

const App = () => {
  return (
    <React.Fragment>
      <SideDrawer>
        <Switch>
          <Route path="/trending" component={NodataComponent} />
          <Route path="/desktop" component={NodataComponent} />
          <Route path="/mail" component={NodataComponent} />
          <Route path="/settings" component={NodataComponent} />
          <Route path="/" exact component={Home} />
        </Switch>
      </SideDrawer>
    </React.Fragment>
  );
};

export default App;
