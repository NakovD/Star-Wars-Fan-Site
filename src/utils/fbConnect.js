

const fbConnect = () => {
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = function () {
        this.FB.init({
            appId: '2167827723342149',
            cookie: true,
            xfbml: true,
            version: 'v7.0'
        });
        // this.FB.getLoginStatus(function (response) {
        //     if (response.status !== 'connected') {
        //         console.log('not connected');
        //         return
        //     }
        //     console.log(response);
        // });

    }
}

export default fbConnect;