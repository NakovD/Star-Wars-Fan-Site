import React, { useState } from 'react';
import Burger from './Burger.js';
import Navigation from './Navigation.js';
import Heading from './Heading.js';
import styles from './Header.module.css';

const Header = () => {

    const [visibility, changeVis] = useState(false);

    const showHeader = () => {
        visibility ? changeVis(false) : changeVis(true);
    }
    return (
        <header onClick={showHeader} onMouseLeave={e => changeVis(false)} className={styles['site_header']}>
            <Burger visibility={visibility} />
            <Navigation visibility={visibility} />
            <Heading />
        </header>
    )
}



export default Header;