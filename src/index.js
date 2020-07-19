import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header/Header.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <Header />
      <div className="app_container">
      <Switch>

      </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

