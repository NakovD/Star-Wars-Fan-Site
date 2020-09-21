import React, { useContext, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import PageLayout from './Components/PageLayout/PageLayout.js';
import Home from './Pages/HomePage/Home.js';
import CharactersPage from './Pages/CharactersPage/CharactersPage.js';
import CharDetailsPage from './Pages/CharDetailsPage/CharDetailsPage.js';
import AboutMe from './Pages/AboutMePage/AboutMe.js';
import LoginPage from './Pages/LoginPage/LoginPage.js';
import RegisterPage from './Pages/RegisterPage/RegisterPage.js';
import CreateCharacterPage from './Pages/CreateCharacterPage/CreateCharacterPage.js';
import EditCharacterPage from './Pages/EditCharacterPage/EditCharacterPage.js';
import ForumHomePage from './Pages/ForumHomePage/ForumHomePage.js';
import CreateDiscussionPage from './Pages/CreateDiscussionPage/CreateDiscussionPage.js';
import UpdateDisc from './Pages/EditDiscussion/EditDiscussion.js';
import DiscussionPage from './Pages/DiscussionPage/DiscussionPage.js';
import ProfilePage from './Pages/ProfilePage/Profile.js';
import Appreciate from './Pages/ThanksForApplyingPage/Thanks.js';
import AdminVerify from './Pages/AdminPages/AdminVerify.js';
import AdminLogin from './Pages/AdminPages/AdminLogin.js';
import AdminRegister from './Pages/AdminPages/AdminRegister.js';
import AdminHome from './Pages/AdminPages/AdminHome.js';
import AdminCharDetails from './Pages/AdminPages/AdminCharDetails.js';
import AdminEditChar from './Pages/AdminPages/AdminEditChar.js';
import Unauthorized from './Pages/Unauthorized/Unauthorized.js';
import authContext from './Context.js';




const Navigation = () => {

    const authInfo = useContext(authContext);
    const loggedIn = authInfo.loggedIn;
    const adminVerify = authInfo.adminVerify;

    return (
        <Router>
            <PageLayout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/characters' component={CharactersPage}></Route>
                        <Route path='/charDetails/:id' component={CharDetailsPage}></Route>
                        <Route path='/aboutMe' component={AboutMe} />
                        <Route path='/login' >{!loggedIn ? (<LoginPage />) : (<Unauthorized />)}</Route>
                        <Route path='/register' >{!loggedIn ? (<RegisterPage />) : (<Unauthorized />)}</Route>
                        <Route path='/addCharacter'>{(loggedIn === 'regular') ? (<CreateCharacterPage />) : (<Unauthorized />)}</Route>
                        <Route path='/editChar/:idChar'>{(loggedIn === 'regular') ? (<EditCharacterPage />) : (<Unauthorized />)}</Route>
                        <Route path='/forum' >{(loggedIn === 'regular') ? (<ForumHomePage />) : (<Unauthorized />)}</Route>
                        <Route path='/createDiscussion' >{(loggedIn === 'regular') ? (<CreateDiscussionPage />) : (<Unauthorized />)}</Route>
                        <Route path='/discussion/:discussionId' >{(loggedIn === 'regular') ? (<DiscussionPage />) : (<Unauthorized />)}</Route>
                        <Route path='/editDisc/:discId' >{(loggedIn === 'regular') ? (<UpdateDisc />) : (<Unauthorized />)}</Route>
                        <Route path='/thanksSucka' >{(loggedIn === 'regular') ? (<Appreciate />) : (<Unauthorized />)}</Route>
                        <Route path='/profilePage/:userId' >{(loggedIn === 'regular') ? (<ProfilePage />) : (<Unauthorized />)}</Route>
                        <Route path='/adminOnly/verify' >{(!loggedIn) ? (<AdminVerify />) : (<Unauthorized />)}</Route>
                        <Route path='/adminOnly/login' >{(!loggedIn && adminVerify) ? (<AdminLogin />) : (<Unauthorized />)}</Route>
                        <Route path='/adminOnly/register' >{(!loggedIn && adminVerify) ? (<AdminRegister />) : (<Unauthorized />)}</Route>
                        <Route path='/adminOnly/characters' >{(loggedIn === 'admin') ? (<AdminHome />) : (<Unauthorized />)}</Route>
                        <Route path='/adminOnly/charDetails/:idChar' >{(loggedIn === 'admin') ? (<AdminCharDetails />) : (<Unauthorized />)}</Route>
                        <Route path='/adminOnly/edit/:idChar' >{(loggedIn === 'admin') ? (<AdminEditChar />) : (<Unauthorized />)}</Route>
                        <Route component={Unauthorized} />
                    </Switch>
                </Suspense>
            </PageLayout>
        </Router>
    )
}

export default Navigation;