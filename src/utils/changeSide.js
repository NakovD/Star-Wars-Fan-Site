import serverRequests from './back-end-service.js';

const changeSideHandler = async (side, oldSide, id, dataChanged) => {
    if (side === 'Dark Side') {
        side = 'dark';
    } else if (side === 'Light Side') {
        side = 'light';
    }
    if (side === oldSide) {
        alert(`You are already ${side} side!`);
        return;
    }
    const change = await serverRequests.POST(`changeSide/${id}`, { side });
    if (change.status === 200) {
        alert('Side changed!');
        dataChanged(prev => !prev);
        return;
    } else {
        const responseJSON = await change.json();
        console.log(responseJSON.message);
        return;
    }
}

export default changeSideHandler;