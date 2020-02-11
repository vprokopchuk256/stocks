import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import 'antd/dist/antd.css';
import './App.css';
import { StockDetails } from './StockDetails';

export default () => {
  return (
    <Router>
      <Route path="/:symbol?" component={StockDetails} />
    </Router>
  );
};