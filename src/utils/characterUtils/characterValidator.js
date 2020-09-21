
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
    if (!charInfo.imgURL.startsWith('http') && !charInfo.imgURL.startsWith('https')) {
        console.log('Not a picture!');
        return {
            error: true,
            message: 'The image link should start with http or https! :)'
        }
    }
    return {
        error: false
    }
}

export default charValidator;