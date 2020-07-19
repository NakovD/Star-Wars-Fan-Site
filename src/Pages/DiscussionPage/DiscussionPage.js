import React from 'react';
import styles from './DiscussionPage.module.css';


// https://codepen.io/Codchunks/pen/NEzpZB for a comment text area, very simple and cool!
const DiscussionPage = () => {
    const darkSide = true;
    const lightSide = true;
    return (
        <div className={styles.forum} >
            <div className={`${styles.post} ${styles.darkSide}`}>
                <div className={`${styles.profilePage} ${styles.dark}`}>
                    <p className={styles.profileName}>ProfileName</p>
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/obi-wan-show-1567178968.jpg?crop=0.486xw:0.973xh;0.512xw,0.00340xh&resize=480:*" alt="noimg" />
                    <p className={styles.rankIcon}>Rank:</p><span className="swg swg-darthvader swg-2x"></span>
                    <p>Vader himself!</p>
                </div>
                <div className={styles.content}>
                    <p className={styles.titlePost}>Kylo ren is crybaby?</p>
                    <p className={styles.postDescription}>I really think kylo is making himself funny, i mean, he isnt even a true sith. Probably just an emo :D :D Prove me wrongI really think kylo is making himself funny, i mean, he isnt even a true sith. Probably just an emo :D :D Prove me wrongI really think kylo is making himself funny, i mean, he isnt even a true sith. Probably just an emo :D :D Prove me wrongI really think kylo is making himself funny, i mean, he isnt even a true sith. Probably just an emo :D :D Prove me wrongI really think kylo is making himself funny, i mean, he isnt even a true sith. Probably just an emo :D :D Prove me wrongI really think kylo is making himself funny, i mean, he isnt even a true sith. Probably just an emo :D :D Prove me wrongI really think kylo is making himself funny, i mean, he isnt even a true sith. Probably just an emo :D :D Prove me wrongI really think kylo is making himself funny, i mean, he isnt even a true sith. Probably just an emo :D :D Prove me wrong</p>
                    <p className={styles.postedOn}>Posted on: </p>
                    <p className={styles.likes}>5 people liked this!</p>
                </div>
            </div>
            <div className={styles.commentSection}>
                <div className={styles.comment}><p>hi hi</p></div>
            </div>
            <div className={styles.commentSection}>
                <div className={styles.comment}><p>hi hi</p></div>
            </div>
            <div className={styles.commentSection}>
                <div className={styles.comment}><p>hi hi</p></div>
            </div>
        </div>
    )
}

export default DiscussionPage;