import React, { useContext } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import PageLayout from './Components/PageLayout/PageLayout.js';
import CharactersPage from './Pages/CharactersPage/CharactersPage.js';
import LoginPage from './Pages/LoginPage/LoginPage.js';
import RegisterPage from './Pages/RegisterPage/RegisterPage.js';
import ForumHomePage from './Pages/ForumHomePage/ForumHomePage.js';
import CreateCharacterPage from './Pages/CreateCharacterPage/CreateCharacterPage.js';
import CharDetailsPage from './Pages/CharDetailsPage/CharDetailsPage.js';
import EditCharacterPage from './Pages/EditCharacterPage/EditCharacterPage.js';
import CreateDiscussionPage from './Pages/CreateDiscussionPage/CreateDiscussionPage.js';
import UpdateDisc from './Pages/EditDiscussion/EditDiscussion.js';
import DiscussionPage from './Pages/DiscussionPage/DiscussionPage.js';
import AdminVerify from './Pages/AdminPages/AdminVerify.js';
import AdminRegister from './Pages/AdminPages/AdminRegister.js';
import AdminLogin from './Pages/AdminPages/AdminLogin.js';
import AdminHome from './Pages/AdminPages/AdminHome.js';
import AdminCharDetails from './Pages/AdminPages/AdminCharDetails.js';
import AdminEditChar from './Pages/AdminPages/AdminEditChar.js';
import Unauthorized from './Pages/Unauthorized/Unauthorized.js';
import Home from './Pages/HomePage/Home.js';
import ProfilePage from './Pages/ProfilePage/Profile.js';
import Appreciate from './Pages/ThanksForApplyingPage/Thanks.js';
import authContext from './Context.js';




const Navigation = () => {

    const authInfo = useContext(authContext);
    const loggedIn = authInfo.loggedIn;
    
    return (
        <Router>
            <PageLayout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/characters' component={CharactersPage} />
                    <Route path='/charDetails/:id' component={CharDetailsPage} />
                    <Route path='/adminOnly/verify' render={() => (!loggedIn ? <AdminVerify /> : <Redirect to='/unauthorized' />)} />
                    <Route path='/profilePage/:userId'>
                        {loggedIn ? (<ProfilePage />) : (<Redirect to='/unauthorized' />)}
                    </Route>
                    <Route path='/thanksSucka'>
                        {loggedIn ? (<Appreciate />) : (<Redirect to='/unauthorized' />)}
                    </Route>
                    <Route path='/login' >
                        {!loggedIn ? (<LoginPage />) : (<Redirect to='/unauthorized' />)}
                    </Route>
                    <Route path='/register' >
                        {loggedIn ? (<Redirect to='/unauthorized' />) : (<RegisterPage />)}
                    </Route>
                    <Route path='/adminOnly/login' render={() => (!loggedIn ? <AdminLogin /> : <Redirect to='/unauthorized' />)} />
                    <Route path='/adminOnly/register' render={() => (!loggedIn ? <AdminRegister /> : <Redirect to='/unauthorized' />)} />
                    <Route path='/adminOnly/characters' component={AdminHome} />
                    <Route path='/adminOnly/charDetails/:idChar' component={AdminCharDetails} />
                    <Route path='/adminOnly/edit/:idChar' component={AdminEditChar} />
                    <Route path='/addCharacter'>
                        {(loggedIn !== 'regular') ? (<Redirect to='/unauthorized' />) : (<CreateCharacterPage />)}
                    </Route>
                    <Route path='/editChar/:idChar' >
                        {(loggedIn === 'regular') ? (<EditCharacterPage />) : (<Redirect to='/unauthorized' />)}</Route>
                    <Route path='/forum' >
                        {(loggedIn) ? (<ForumHomePage />) : (<Redirect to='/dawdawd' />)}</Route>
                    <Route path='/createDiscussion' >
                        {(loggedIn === 'regular') ? (<CreateDiscussionPage />) : (<Redirect to='/unauthorized' />)}</Route>
                    <Route path='/editDisc/:discId' >
                        {(loggedIn === 'regular') ? (<UpdateDisc />) : (<Redirect to='/unauthorized' />)}
                    </Route>
                    <Route path='/discussion/:discussionId' >
                        {(loggedIn === 'regular') ? (<DiscussionPage />) : (<Redirect to='/unauthorized' />)}</Route>
                    <Route component={Unauthorized} />
                </Switch>
            </PageLayout>
        </Router>
    )
}

export default Navigation;