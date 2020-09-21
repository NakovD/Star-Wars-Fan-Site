import React from 'react';
import SmallButton from '../Forum/SmallButton.js';
import styles from './UploadImage.module.css';


const UploadOwnImage = ({ onClick }) => {

    return (
        <div className={styles.uplIMG}>
            <p className={styles.or}>Or:</p>
            <SmallButton text="Upload your own image?" onClick={onClick} />
        </div>
    )
}

export default UploadOwnImage;