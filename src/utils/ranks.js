

const ranks = (side, discussions) => {
    const ranks = {
        'light': {

        },
        'dark': function (discussions) {
            if (discussions <= 10) { return 'swg-stormtrooper' }
            else if (discussions <= 30) { return 'swg-deathtrooper' }
            else if (discussions <= 50) { return 'swg-darthmaul' }
            else if (discussions <= 80) { return 'swg-bobbafett' }
            else if (discussions <= 110) { return 'swg-phasma' }
            else if (discussions <= 140) { return 'swg-kylo-2' }
            else if (discussions <= 170) { return 'swg-darthvader' }
        }
    }
    return ranks[side](discussions);
}

export default ranks;