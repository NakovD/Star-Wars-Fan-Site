const headerLinks = (loggedIn, _id) => {
    if (loggedIn === 'regular') {
        return [
            {
                to: 'Characters',
                href: 'characters'
            },
            {
                to: 'Add a new character',
                href: 'addCharacter'
            },
            {
                to: 'Forum',
                href: 'forum'
            },
            {
                to: 'Profile Page',
                href: `profilePage/${_id}`
            }
        ]
    } else if (loggedIn === 'admin') {
        return [
            {
                to: 'Characters',
                href: 'adminOnly/characters'
            }
        ]
    } else if (!loggedIn) {
        return [
            {
                to: 'Home',
                href: ''
            },
            {
                to: 'Characters',
                href: 'characters'
            },
            {
                to: 'Log In',
                href: 'login'
            },
            {
                to: 'Register',
                href: 'register'
            },

            {
                to: 'About Me',
                href: 'aboutMe'
            }
        ]
    }
}

export default headerLinks;