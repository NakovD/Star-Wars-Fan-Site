import React, { useState } from 'react';
import InputField from '../Auth/InputField.js';
import { Link } from 'react-router-dom';
import './SearchField.css';



const SortField = () => {

    const [searchWord, changeSearch] = useState('');


    return (
        <div className="searchBar">
            <InputField
                type="text"
                usedFor='Search'
                value={searchWord}
                onChange={e => changeSearch(e.target.value)} />
            <button className='button'><Link to={`/characters?keyWord=${searchWord}`}>Search?</Link></button>
        </div>
    )
}


export default SortField;