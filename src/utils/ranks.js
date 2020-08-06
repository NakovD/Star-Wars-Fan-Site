

const ranks = (side, discussions) => {
    const ranks = {
        'light': function (discussions) {
            if (discussions <= 10) { return { icon: 'swg-clonetrooper', text: 'Just a clone!' } }
            else if (discussions <= 30) { return { icon: 'swg-r2d2', text: 'Not bad for a droid!' } }
            else if (discussions <= 50) { return { icon: 'swg-saberjedi', text: 'Jedi padawan!' } }
            else if (discussions <= 80) { return { icon: 'swg-anakin', text: 'Anakin Skywalker! Jedi Wannabe!' } }
            else if (discussions <= 110) { return { icon: 'swg-obiwankenobi', text: 'Obi-Wan Kenobi, Master of trolling!' } }
            else if (discussions <= 140) { return { icon: 'swg-macewindu', text: 'Mace Windi, I just wanna look cool!' } }
            else if (discussions <= 170) { return { icon: 'swg-yoda-2', text: 'Grand Master Yoda! Now you talk in reverse!' } }
        },
        'dark': function (discussions) {
            if (discussions <= 10) { return { icon: 'swg-stormtrooper', text: 'Stormtrooper! Never hits!' } }
            else if (discussions <= 30) { return { icon: 'swg-deathtrooper', text: 'Deathtrooper! Now you hit sometimes!' } }
            else if (discussions <= 50) { return { icon: 'swg-darthmaul', text: 'Darth Maul! Dont get sliced in half!' } }
            else if (discussions <= 80) { return { icon: 'swg-bobbafett', text: 'Bobba Fett! You dont want this problems!' } }
            else if (discussions <= 110) { return { icon: 'swg-phasma', text: 'Phasma! Girl in a war? Thats cool!' } }
            else if (discussions <= 140) { return { icon: 'swg-kylo-2', text: 'Supreme Leader Kylo Ren! The angry boy!' } }
            else if (discussions <= 170) { return { icon: 'swg-darthvader', text: 'Darth Vader! Merciless!' } }
        }
    }
    return ranks[side](discussions);
}

export default ranks;