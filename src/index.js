import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/css/argon-design-system-react.css";
import "assets/scss/argon-design-system-react.scss";
import New from "views/New.js"
import Eng from "views/Eng.js"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <New {...props} />} />
      <Route path="/eng" exact render={props => <Eng {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
