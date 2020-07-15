import React from 'react';
import './HeroCard.css';


const HeroCard = ({ img }) => {


    return (
        <div className="wrapper">
            <div className="card">
                <img src={img}></img>
                <div className="descriptions">
                    <h1>Anakin Skywalker</h1>
                    <button>
                        <i className="fab fa-youtube"></i>
                    Click for more details
                </button>
                </div>
            </div>
        </div>
    );
}

export default HeroCard;