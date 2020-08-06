import { fbAuthenticate } from './authenticationUtils/auth.js';

const fbHandler = (url, onSucc, onErr) => {

    window.FB.login(function (response) {
        if (response.status !== 'connected') {
            console.log('someth went wrong');
            return;
        } else {
            this.FB.api(`${response.authResponse.userID}`, 'GET', { "fields": `name,picture.width(250).height(300)` }, async function (response) {
                console.log(response);
                const fbAuth = await fbAuthenticate(response);
                if (fbAuth.error) {
                    console.log(fbAuth.message);
                    onErr(fbAuth.message);
                    return;
                }
                onSucc(fbAuth.userInfo);
            }); //THIS IS USER NAME AND USER PICTURE
            console.log('you logged in with FB!');
        }
    }, { scope: 'public_profile', return_scopes: true });
}

export default fbHandler;