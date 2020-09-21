const startWidget = (changeURLMethod, isObj) => {
    const myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'dido98cloudinary',
        uploadPreset: 'ekeew3n2'
    }, (error, result) => {
        if (!error && result && result.event === 'success') {
            console.log('Done! Here is the image info:', result.info);
            if (!isObj) {
                changeURLMethod(result.info.secure_url);
            } else {
                changeURLMethod({ ...isObj, imgURL: result.info.secure_url });
            }
        } else if (error) {
            console.log(error);
            alert('Please try again!');
        }
    });

    return myWidget;
}

export default startWidget;