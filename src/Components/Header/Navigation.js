import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Navigation.module.css';
import Route from './Route.js';
import headerLink from '../../utils/headerLinks.js';
import AuthContext from '../../Context.js';
import Logout from './Logout.js';


const Navigation = (props) => {
    const authInfo = useContext(AuthContext);
    const allLinks = headerLink(authInfo.loggedIn);
    const LogOutHandler = () => {
        authInfo.logOut();
        props.history.push('/');
        return;
    }

    return (
        <nav className={props.visibility ? styles.show : null}>
            <ul>
                {allLinks.map(link => {
                    return (<Route key={link.to} side={authInfo.userInfo.side} goTo={link.to} href={link.href} />)
                })}
                {authInfo.loggedIn ? (<Logout onClick={e => LogOutHandler()} side={authInfo.userInfo.side} />) : null}
            </ul>
        </nav>

    )
}

export default withRouter(Navigation);