import serverRequests from './back-end-service.js';


const changeProfileIMG = async (linkIMG, idUser) => {
    if (linkIMG.length < 1) {
        return;
    }
    if (!linkIMG.startsWith('http') && !linkIMG.startsWith('https')) {
        console.log('Not a picture!');
        return;
    }
    const changePic = await serverRequests.POST(`changePic/${idUser}`, { linkIMG });
    if (changePic.status === 200) {
        alert('Profile picture change successfully!');
        return false;
    } else {
        const error = await changePic.json();
        console.log(error.message);
        return;
    }
}

export default changeProfileIMG;