import React from 'react';
import styles from './Unauthorized.module.css';
// import io from 'socket.io-client';
// const endPoint = 'http://localhost:3001';

const Unauthorized = () => {

    // const [response, setResponse] = useState('');

    // useEffect(() => {
    //     const socket = io(endPoint);
    //     socket.on('FromApi', data => setResponse(data));
    //     console.log('execute');
    //     return () => socket.close();
    // }, []);


    return (
        <>
            <div className={styles.unauthorized}>
                {/* <p>its time: {response}</p> */}
                <p>There isn't a page like this or You are not allowed to go this way! Sorry!</p>
                <div className={`${styles.saber} ${styles.first}`}></div>
                <div className={`${styles.saber} ${styles.second}`}></div>
            </div>
        </>
    )
}

export default Unauthorized;