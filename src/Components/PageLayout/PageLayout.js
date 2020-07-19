import React from 'react';
import Header from '../Header/Header.js';
import styles from './PageLayout.module.css';


const PageLayout = (props) => {


    return (
        <>
            <Header />
            <div className={styles.app_container}>
                {props.children}
            </div>
        </>
    );
}

export default PageLayout;