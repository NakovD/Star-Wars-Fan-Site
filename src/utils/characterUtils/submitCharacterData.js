import charValidator from './characterValidator.js';
import characterOperations from './characterDbSave.js';


const submitCharData = async (e, charData, changeMethod, url, onSucc) => {
    e.preventDefault();
    const check = charValidator(charData);
    if (check.error) {
        changeMethod({ ...charData, err: check.message });
        return;
    }
    const charOperation = await characterOperations(url, charData);
    if (charOperation.error) {
        changeMethod({ ...charData, err: charOperation.message });
        return;
    }
    onSucc();
}

export default submitCharData;