import { Route, Router, Switch } from "wouter";
import { Step1 } from "./pages/SalesFlow";

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Step1} />
    </Switch>
  </Router>
);
