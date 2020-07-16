import React from 'react';
import './Button.css';




const Button = ({ text }) => {
    return (
        <div className="container">
            <a href="/createDiscussion" className="btn effect01" target="_blank"><span>{text}</span></a>
        </div>
    )
}

export default Button;