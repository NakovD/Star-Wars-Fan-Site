import React from 'react';

const species = [
    'Human',
    'Twi-Leks',
    'Togruta',
    'Nighsister',
    'Zabrak',
    'Wookie',
    'Jawas',
    'Ewoks',
    'Gungans',
    'Mirialans',
    'Rodians',
    'Neimoidians',
    'Keshiri',
    'Iktochi',
    'Trandoshands',
    'Geonosians',
    'Kaminoans',
    'Mon Calamari',
    'Chis',
    'Hutts',
]
const special = [
    <option key={'Unknown12'} value="Unknown">Unknown(who knows what yoda is?!?)</option>,
    <option key={'Other12'} value="Other">Other(I will check and add it myself)</option>
]

const options = species.map((el, i) => (<option key={el + i} value={el}>{el}</option>));

export default options.concat(special);