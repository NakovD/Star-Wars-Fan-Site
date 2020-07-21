import React from 'react';



const ImgComponent = ({ imgLink, alt }) => {

    return (
        <img src={imgLink} alt={alt}></img>
    )
}

export default ImgComponent;