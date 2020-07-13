import React from 'react';
import styles from './LoginForm.module.css';


const LoginForm = () => {

    console.log(styles);
    return (
        <div id={styles.login}>
            <form name='form-login'>
                <p>You wanna be part of us? Its really easy to join! We are waiting for you!</p>
                <span className="fontawesome-user"></span>
                <input type="text" id="user" placeholder="Username" />

                <span className="fontawesome-lock"></span>
                <input type="password" id="pass" placeholder="Password" />
                <span className="fontawesome-lock"></span>
                <input type="password" id="pass" placeholder="Repeat Password" />
                <label>Choose side:</label>
                <select name="Choose Side">
                    <option id={styles.dark}>Dark side</option>
                    <option id={styles.light}>Light side</option>
                </select>
                <input type="button" value="Log in with FB!"/>

                <input type="submit" value="Login" />

            </form>
        </div>
    )
}

export default LoginForm;