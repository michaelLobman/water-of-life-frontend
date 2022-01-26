import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Regions from "./components/Regions";
import Distilleries from "./components/Distilleries";

function App() {
  return (
    <div>
      <NavBar />
        <Switch>
          <Route exact path = "/regions">
            <Regions />
          </Route>
          <Route exact path = "/distilleries">
            <Distilleries />
          </Route>
          <Route exact path = "/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
