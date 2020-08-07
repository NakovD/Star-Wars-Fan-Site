import {
    authenticate
} from './auth.js';
import { submitValidator } from './authValidator.js';


const submitAuthData = async (e, submitFor, authData, changeMethod, onSucc, onFail) => {
    e.preventDefault();
    if (submitFor === 'admin/login') {
        const check = submitValidator(authData, 'login');
        if (check.error) {
            changeMethod({ ...authData, submitErr: check.message });
            return;
        }
    } else {
        const check = submitValidator(authData, submitFor);
        if (check.error) {
            changeMethod({ ...authData, submitErr: check.message });
            return;
        }
    }
    const authenticateUser = await authenticate(authData, submitFor);
    if (!authenticateUser.error) {
        onSucc(authenticateUser.userInfo);
        return;
    }
    onFail(authenticateUser.message);
    return;
}



export default submitAuthData;