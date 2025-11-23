import { Redirect, Route, Router, Switch } from 'wouter';
import { Header } from './common/components';
import { ResumePage, Step1Page, Step2Page } from './pages/SalesFlow';

export const Routes = () => (
  <>
    <Router>
      <Route path="/">
        <Redirect to="/cotiza-tu-seguro-rimac" />
      </Route>
      <Header />
      <Switch>
        <Route path="/cotiza-tu-seguro-rimac" component={Step1Page} />
        <Route path="/cotiza-tu-seguro-rimac/1" component={Step2Page} />
        <Route path="/cotiza-tu-seguro-rimac/2" component={ResumePage} />
        <Route path="/*">
          <Redirect to="/cotiza-tu-seguro-rimac" />
        </Route>
      </Switch>
    </Router>
  </>
);
