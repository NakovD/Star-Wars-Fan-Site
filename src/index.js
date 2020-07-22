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
import DiscussionPage from './Pages/DiscussionPage/DiscussionPage.js';
import CharDetailsPage from './Pages/CharDetailsPage/CharDetailsPage.js';
import CreateCharacterPage from './Pages/CreateCharacterPage/CreateCharacterPage.js';
import EditCharacterPage from './Pages/EditCharacterPage/EditCharacterPage.js';
import AdminVerify from './Pages/AdminPages/AdminVerify.js';
import AdminRegister from './Pages/AdminPages/AdminRegister.js';
import AdminLogin from './Pages/AdminPages/AdminLogin.js';
import CreateDiscussionPage from './Pages/CreateDiscussionPage/CreateDiscussionPage.js';

// TO DO: select html element separate in component; you use it a few times
// TO DO
ReactDOM.render(
  <React.StrictMode>
    <Router >
      <PageLayout >
        <Switch>
          <Route path="/characters" component={CharactersPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/forum" component={ForumHomePage} />
          <Route path="/addCharacter" component={CreateCharacterPage} />
          <Route path="/charDetails/:id" component={CharDetailsPage} />
          <Route path="/edit/:id" component={EditCharacterPage} />
          <Route path="/createDiscussion" component={CreateDiscussionPage} />
          <Route path="/adminOnly/verify" component={AdminVerify} />
          <Route path="/adminOnly/register" component={AdminRegister} />
          <Route path="/adminOnly/login" component={AdminLogin} />
        </Switch>
      </PageLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

