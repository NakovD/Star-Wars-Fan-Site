
const charValidator = (charInfo) => {
    if (!charInfo.name || !charInfo.era || !charInfo.factions || !charInfo.species || !charInfo.imgURL || !charInfo.description) {
        return {
            error: true,
            message: 'Please fill all fields!'
        }
    }
    if (charInfo.description.length < 20) {
        return {
            error: true,
            message: 'Description must be at least 20 characters!'
        }
    }
    return {
        error: false
    }
}

export default charValidator;