import CharactersPage from '../Pages/CharactersPage/CharactersPage.js';
import LoginPage from '../Pages/LoginPage/LoginPage.js';
import RegisterPage from '../Pages/RegisterPage/RegisterPage.js';
import ForumHomePage from '../Pages/ForumHomePage/ForumHomePage.js';
import CreateCharacterPage from '../Pages/CreateCharacterPage/CreateCharacterPage.js';
import CharDetailsPage from '../Pages/CharDetailsPage/CharDetailsPage.js';
import EditCharacterPage from '../Pages/EditCharacterPage/EditCharacterPage.js';
import CreateDiscussionPage from '../Pages/CreateDiscussionPage/CreateDiscussionPage.js';
import DiscussionPage from '../Pages/DiscussionPage/DiscussionPage.js';
import AdminVerify from '../Pages/AdminPages/AdminVerify.js';
import AdminRegister from '../Pages/AdminPages/AdminRegister.js';
import AdminLogin from '../Pages/AdminPages/AdminLogin.js';





const appRoutes = [
    {
        path: '/characters',
        component: CharactersPage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/register',
        component: RegisterPage
    },
    {
        path: '/forum',
        component: ForumHomePage
    },
    {
        path: '/addCharacter',
        component: CreateCharacterPage
    },
    {
        path: '/charDetails/:id',
        component: CharDetailsPage
    },
    {
        path: '/edit/:id',
        component: EditCharacterPage
    },
    {
        path: '/createDiscussion',
        component: CreateDiscussionPage
    },
    {
        path: '/discussion/:id',
        component: DiscussionPage
    },
    {
        path: '/adminOnly/verify',
        component: AdminVerify
    },
    {
        path: '/adminOnly/register',
        component: AdminRegister
    },
    {
        path: '/adminOnly/login',
        component: AdminLogin
    }
]

export default appRoutes;