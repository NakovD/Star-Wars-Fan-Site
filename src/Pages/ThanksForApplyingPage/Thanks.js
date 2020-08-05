import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Thanks.module.css';


const Appreciate = () => {


    return (
        <div className={styles.thanks}>Thank you for applying the information about this hero!
        It will be reviewed by an admin and if the data is correct, you will soon see it in the site!
        Thanks again! <Link to='/characters'>Go to characters?</Link></div>
    )
}

export default Appreciate;