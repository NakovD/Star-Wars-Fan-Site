import serverRequests from '../back-end-service.js';


const changeSideHandler = async (side, oldSide, id, changeMethod) => {
    if (side === oldSide) {
        alert(`You are already ${side} side!`);
        return;
    }
    const change = await serverRequests.POST(`changeSide/${id}`, { side });
    if (change.status === 200) {
        alert('Side changed!');
        changeMethod(prev => !prev);
        return;
    } else {
        const responseJSON = await change.json();
        console.log(responseJSON.message);
        return;
    }
}

const changeProfileIMG = async (linkIMG, idUser, changeMethod, changeImgLink) => {
    if (linkIMG.length < 1) {
        return;
    }
    if (!linkIMG.startsWith('http') && !linkIMG.startsWith('https')) {
        alert('Image link should start with http or https!');
        console.log('Not a picture!');
        return;
    }
    const changePic = await serverRequests.POST(`changePic/${idUser}`, { linkIMG });
    if (changePic.status === 200) {
        alert('Profile picture change successfully!');
        changeMethod(prev => !prev);
        changeImgLink('');
        return false;
    } else {
        const error = await changePic.json();
        console.log(error.message);
        return;
    }
}


export {
    changeSideHandler,
    changeProfileIMG
}