import React from 'react';
import Burger from './Burger.js';
import Navigation from './Navigation.js';
import Heading from './Heading.js';
import styles from './Header.module.css';




class Header extends React.Component {
    state = {
        visibility: false
    }

    showHeader = () => {
        this.setState(prevState => ({ visibility: !prevState.visibility }));
    }
    hideHeader = () => {
        const currentState = this.state.visibility;
        if (currentState) {
            this.setState(prevState => ({ visibility: !prevState.visibility }));
        }
    }

    render() {
        return (
            <header onClick={this.showHeader} onMouseLeave={this.hideHeader} className={styles['site_header']}>
                <Burger visibility={this.state.visibility} />
                <Navigation visibility={this.state.visibility} />
                <Heading />
            </header>
        )
    }
}


export default Header;