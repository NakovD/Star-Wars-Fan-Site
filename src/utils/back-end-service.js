export default {
    GET: async function (URL) {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    },
    POST: async function (URL) {
        const bodyObj = {
            name: 'Obi-Wan Kenobi',
            species: 'Human',
            era: 'Galactic Republic, Empire',
            factions: ['Jedi', 'Galactic Republic', 'Rebel'],
            description: "Obi-Wan Kenobi was a Force-sensitive human male, legendary Jedi Master, and member of the Jedi High Council during the Fall of the Republic.A noble man known for his skills with the Force, Kenobi trained Anakin Skywalker as his Padawan, served as a Jedi General in the Grand Army of the Republic, and became a mentor to Luke Skywalker prior to his death in 0 BBY.",
            imgURL: 'https://i.pinimg.com/originals/bf/2f/83/bf2f83a5d290840255707375c210af4a.jpg'
        };
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyObj)
        });
        const message = await response.json();
        return message;
    }
}