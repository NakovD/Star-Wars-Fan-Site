import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageLayout from './Components/PageLayout/PageLayout.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import CharactersPage from './Pages/CharactersPage/CharactersPage.js';
import LoginPage from './Pages/LoginPage/LoginPage.js';
import RegisterPage from './Pages/RegisterPage/RegisterPage.js';
import ForumHomePage from './Pages/ForumHomePage/ForumHomePage.js';
import DiscussionPage from './Pages/DiscussionPage/DiscussionPage.js'

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <PageLayout >
        <Switch>
          <Route path="/characters" component={CharactersPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/forum" component={ForumHomePage} />
          <Route path="/addChar" component={DiscussionPage} />
        </Switch>
      </PageLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

