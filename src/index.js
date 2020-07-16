import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './Components/Header/Header.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import HeroDetails from './Components/HeroDetails/HeroDetails.js';
import AuthForm from './Components/Auth/AuthForm.js';

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <Header />
      <Switch >
        <Route path="/sign up" component={() => <AuthForm type="register" />} />
        <Route path="/log in" component={() => <AuthForm type="login" />} />
        <Route path="/characters" component={App} />
        <Route path="/characterDetails" component={HeroDetails}/>
        <App />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
