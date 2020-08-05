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

    return (
        <Router>
            <PageLayout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/characters' component={CharactersPage} />
                    <Route path='/charDetails/:id' component={CharDetailsPage} />
                    <Route path='/adminOnly/verify' render={() => (!authInfo.loggedIn ? <AdminVerify /> : <Redirect to='/unauthorized' />)} />
                    <Route path='/unauthorized' component={Unauthorized} />
                    <Route path='/profilePage/:userId'>
                        {authInfo.loggedIn ? (<ProfilePage />) : (<Redirect to='/unauthorized' />)}
                    </Route>
                    <Route path='/thanksSucka'>
                        {authInfo.loggedIn ? (<Appreciate />) : (<Redirect to='/unauthorized' />)}
                    </Route>
                    <Route path='/login' >
                        {!authInfo.loggedIn ? (<LoginPage />) : (<Redirect to='/unauthorized' />)}
                    </Route>
                    <Route path='/register' >
                        {authInfo.loggedIn ? (<Redirect to='/unauthorized' />) : (<RegisterPage />)}
                    </Route>
                    <Route path='/adminOnly/login' render={() => (!authInfo.loggedIn ? <AdminLogin /> : <Redirect to='/unauthorized' />)} />
                    <Route path='/adminOnly/register' render={() => (!authInfo.loggedIn ? <AdminRegister /> : <Redirect to='/unauthorized' />)} />
                    <Route path='/adminOnly/characters' component={AdminHome} />
                    <Route path='/adminOnly/charDetails/:id' component={AdminCharDetails} />
                    <Route path='/adminOnly/edit/:id' component={AdminEditChar} />
                    <Route path='/addCharacter'>
                        {(authInfo.loggedIn !== 'regular') ? (<Redirect to='/unauthorized' />) : (<CreateCharacterPage />)}
                    </Route>
                    <Route path='/editChar/:idChar' >
                        {(authInfo.loggedIn === 'regular') ? (<EditCharacterPage />) : (<Redirect to='/unauthorized' />)}</Route>
                    <Route path='/forum' >
                        {(authInfo.loggedIn === 'regular') ? (<ForumHomePage />) : (<Redirect to='/unauthorized' />)}</Route>
                    <Route path='/createDiscussion' >
                        {(authInfo.loggedIn === 'regular') ? (<CreateDiscussionPage />) : (<Redirect to='/unauthorized' />)}</Route>
                    <Route path='/editDisc/:discId' >
                        {(authInfo.loggedIn === 'regular') ? (<UpdateDisc />) : (<Redirect to='/unauthorized' />)}
                    </Route>
                    <Route path='/discussion/:discussionId' >
                        {(authInfo.loggedIn === 'regular') ? (<DiscussionPage />) : (<Redirect to='/unauthorized' />)}</Route>
                </Switch>
            </PageLayout>
        </Router>
    )
}

export default Navigation;