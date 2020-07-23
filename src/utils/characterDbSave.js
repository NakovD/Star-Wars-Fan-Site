import serverRequests from './back-end-service.js';


const createCharacter = async (charInfo) => {
    const reqBody = {
        name: charInfo.name,
        era: charInfo.era,
        factions: charInfo.factions,
        species: charInfo.species,
        imgURL: charInfo.imgURL,
        description: charInfo.description
    }
    const createChar = await serverRequests.POST('http://localhost:3001/api/createChar', reqBody);

    if (createChar.message !== 'Character saved successfully in DB!') {
        return {
            error: true,
            message: createChar.message
        }
    }
    return {
        error: false
    }
}

export default createCharacter;