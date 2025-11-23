import { lazy, Suspense } from 'react';
import { Redirect, Route, Router, Switch } from 'wouter';
import { Header } from './common/components';

const routes = [
  {
    path: '/cotiza-tu-seguro-rimac',
    component: lazy(() => import('./pages/SalesFlow/Step1/Step1Page')),
  },
  {
    path: '/cotiza-tu-seguro-rimac/1',
    component: lazy(() => import('./pages/SalesFlow/Step2/Step2Page')),
  },
  {
    path: '/cotiza-tu-seguro-rimac/2',
    component: lazy(() => import('./pages/SalesFlow/Resume/ResumePage')),
  },
];

export const Routes = () => (
  <>
    <Router>
      <Route path="/">
        <Redirect to="/cotiza-tu-seguro-rimac" />
      </Route>
      <Header />
      <Suspense fallback={<div>Cargando…</div>}>
        <Switch>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} component={Component} />
          ))}
          <Route path="/*">
            <Redirect to="/cotiza-tu-seguro-rimac" />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  </>
);
