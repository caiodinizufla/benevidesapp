import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux';
import { store, persistor } from './helpers/store';


import indexRoutes from "./main/routes";



var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} key={key} component={prop.component} exact={prop.exact} />;
          })}
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
  ,document.getElementById("root")
);