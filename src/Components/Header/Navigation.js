import React from 'react';
import styles from './Navigation.module.css';
import Route from './Route.js';
import headerLink from '../../utils/headerLinks.js';



const Navigation = ({ visibility }) => {
    const loggedIn = true;   //this will change
    // const darkSide = 'red';
    const lightSide = 'blue';
    
    const allLinks = headerLink(loggedIn);
    return (
        <nav className={visibility ? styles.show : null}>
            <ul>
                {allLinks.map(link => { return (<Route key={link.to} color={loggedIn ? lightSide : 'yellow'} goTo={link.to} href={link.href} />) })}
            </ul>
        </nav>

    )
}

export default Navigation;