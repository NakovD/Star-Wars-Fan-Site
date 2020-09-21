import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Navigation.module.css';
import Route from './Route.js';
import headerLink from '../../utils/otherUtils/headerLinks.js';
import AuthContext from '../../Context.js';
import Logout from './Logout.js';


const Navigation = ({ visibility }) => {
    const authInfo = useContext(AuthContext);
    const history = useHistory();
    const allLinks = headerLink(authInfo.loggedIn, authInfo.userInfo.userId);

    const LogOutHandler = () => {
        console.log(document.cookie);
        authInfo.logOut();
        history.push('/');
        console.log(document.cookie);
    }

    return (
        <nav className={visibility ? styles.show : null}>
            <ul>
                {allLinks.map(link => {
                    return (<Route key={link.to} side={authInfo.userInfo.side} goTo={link.to} href={link.href} />)
                })}
                {authInfo.loggedIn ? (<Logout onClick={LogOutHandler} side={authInfo.userInfo.side} />) : null}
            </ul>
        </nav>

    )
}

export default Navigation;