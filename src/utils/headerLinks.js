const headerLinks = (loggedIn) => {
    if (loggedIn) {
        return [
            {
                to: 'Characters',
                href: 'characters'
            },
            {
                to: 'Add a new character',
                href: 'addChar'
            },
            {
                to: 'Forum',
                href: 'forum'
            },
            {
                to: 'Profile Page',
                href: 'profilePage'
            },
            {
                to: 'Logout',
                href: 'logout'
            }
        ]
    }else {
        return [
            {
                to: 'Home',
                href: '/'
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
                href: '/aboutMe'
            }
        ]
    }
}

export default headerLinks;