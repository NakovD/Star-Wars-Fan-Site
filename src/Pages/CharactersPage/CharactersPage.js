import React from 'react';
import SortField from '../../Components/SortField/SortField.js';
import HeroCard from '../../Components/HeroCard/HeroCard.js';



const CharactersPage = () => {


    return (
        <>
        <SortField />
        <HeroCard img='https://i.pinimg.com/originals/05/0d/69/050d69777a37e76704a79a42db5997e5.jpg'/>
        <HeroCard img='https://i.redd.it/niph5ipgf6201.jpg'/>
        <HeroCard img='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d957e31582619.565709ee8648c.jpg'/>
        <HeroCard img='https://cdn.shopify.com/s/files/1/0969/9128/products/Painting_-_Princess_Leia_in_Star_Wars_-_Hollywood_Collection_c6e2366a-e09c-427e-bff0-b14ea5ef7fcc.jpg?v=1485845739'/>
        <HeroCard img='https://i.pinimg.com/736x/05/5c/f7/055cf770e6085c250a3679c8b82774dc.jpg'/>
        </>
    )
}

export default CharactersPage;