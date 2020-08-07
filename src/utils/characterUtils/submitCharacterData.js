import charValidator from './characterValidator.js';
import {
    charCreate_Update,
    deleteChar
} from './charDBOperations.js';


const submitCharData = async (e, charData, changeMethod, url, onSucc) => {
    e.preventDefault();
    const check = charValidator(charData);
    if (check.error) {
        changeMethod({ ...charData, err: check.message });
        return;
    }
    const charOperation = await charCreate_Update(url, charData);
    if (charOperation.error) {
        changeMethod({ ...charData, err: charOperation.message });
        return;
    }
    onSucc();
}

const deleteCharHandler = async (idChar, onSucc, changeMethod, charDetails) => {
    const deleteChar_ = await deleteChar(idChar);
    if (deleteChar_.error) {
        changeMethod({ ...charDetails, err: deleteChar_.message });
        return;
    }
    onSucc();
}

export {
    submitCharData,
    deleteCharHandler
}