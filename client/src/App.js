import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import { Main } from './Main';
import { StockDetails } from './StockDetails';

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/:symbol">
          <StockDetails />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}