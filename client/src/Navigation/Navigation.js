import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../Landing/Landing";
import Preview from "../Preview/Preview";

const Navigation = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/preview" component={Preview} />
    </Switch>
  </Router>
);
export default Navigation;
