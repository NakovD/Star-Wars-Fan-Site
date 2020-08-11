import React, { useEffect, useState, useContext } from 'react';
import SearchField from '../../Components/SearchField/SearchField.js';
import HeroCard from '../../Components/HeroCard/HeroCard.js';
import NoChars from '../../Components/NoChars/NoChars.js';
import Pagination from '../../Components/Pagination/Pagination.js';
import serverRequests from '../../utils/back-end-service.js';
import pageAndKeyWord from '../../utils/otherUtils/paginationAndSearch.js';
import AuthContext from '../../Context.js'



const CharactersPage = (props) => {
    const authInfo = useContext(AuthContext);
    const [characters, changeChars] = useState([]);
    const [pages, changePages] = useState(0);

    const queries = pageAndKeyWord(props.location.search);
    useEffect(() => {
        const getData = async () => {
            const data = await serverRequests.GET(`characters?page=${queries.page}&keyWord=${queries.keyWord}`);
            changePages(data.maxPages);
            changeChars(data.characters);
        }
        getData();
    }, [queries.page, queries.keyWord]);
    return (
        <>
            {authInfo.loggedIn ? (<SearchField />) : null}
            {(characters.length === 0) ? (<NoChars />) : null}
            {characters.map(character => { return (<HeroCard key={character._id} {...character} />) })}
            <Pagination prev={queries.page - 1} keyWord={queries.keyWord} maxPages={pages} next={queries.page + 1} />
        </>
    );
}

export default CharactersPage;