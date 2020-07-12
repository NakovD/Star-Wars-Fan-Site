import React from 'react';
import styles from './Navigation.module.css';
import Route from './Route.js';




const Navigation = ({ visibility }) => {


    return (
        <nav className={visibility ? styles.show : null}>
            <ul>
                <Route color='yellow' goTo={"Home"}/>
                <Route color='yellow' goTo={"Characters"}/>
                <Route color='yellow' goTo={"About Me"}/>
                <Route color='yellow' goTo={"Log In"}/>
                <Route color='yellow' goTo={"Sign Up"}/>
            </ul>
        </nav>

    )
}

export default Navigation;