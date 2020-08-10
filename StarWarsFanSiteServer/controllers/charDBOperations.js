const models = require('../models/character/character.js');
const errorMessageCleaner = require('./errorMssgCleaner.js');



const save = async (req) => {
    const {
        name,
        factions,
        species,
        era,
        imgURL,
        description
    } = req.body;
    if (!name || !factions || !species || !era || !imgURL || !description) {
        return {
            error: true,
            message: 'All fields must be filled!'
        }
    }
    try {
        if (req.url === '/createChar') {
            const newCharacter = new models.notApproved({ name, factions, species, era, imgURL, description });
            const saveInDb = await newCharacter.save();
        } else if (req.url === '/approveChar') {
            const oldId = req.body._id;
            const deleteOld = await models.notApproved.findByIdAndDelete(oldId);
            const newCharacter = new models.approved({ name, factions, species, era, imgURL, description });
            const checkApprovedChars = await models.approved.findOne({ name: newCharacter.name });
            if (checkApprovedChars) {
                const deleteOldCharInfo = await models.approved.findByIdAndDelete(checkApprovedChars._id);
            }
            const saveInDB = await newCharacter.save();
        }
        return {
            error: false
        }
    } catch (error) {
        const cleanErrorMssg = errorMessageCleaner(error.message);
        return {
            error: true,
            message: cleanErrorMssg
        }
    }

}



module.exports = save;