import React from 'react';



const HeroInfoDiv = ({ className, label, data }) => {

    return (
        <div className={className}>{label}<p>{data}</p></div>
    )
}

export default HeroInfoDiv;