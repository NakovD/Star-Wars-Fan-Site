import React, { useEffect, useState } from 'react';
import SortField from '../../Components/SortField/SortField.js';
import HeroCard from '../../Components/HeroCard/HeroCard.js';
import Pagination from '../../Components/Pagination/Pagination.js';
import serverRequests from '../../utils/back-end-service.js';



const CharactersPage = (props) => {
    const [characters, changeChars] = useState([]);
    const [pages, changePages] = useState(0);
    const regex = /\?page=([\d])/;
    const check = props.location.search.match(regex);
    const page = check ? +check[1] : 0;
    useEffect(() => {
        const getData = async () => {
            const data = await serverRequests.GET(`characters?page=${page}`);
            changePages(data.maxPages);
            changeChars(data.characters);
        }
        getData();
    }, [page]);

    return (
        <>
            <SortField />
            {characters.map(character => { return (<HeroCard key={character._id} {...character} />) })}
            <Pagination prev={page - 1} maxPages={pages} next={page + 1} />
        </>
    );
}

export default CharactersPage;