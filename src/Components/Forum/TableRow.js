import React from 'react';
import { Link } from 'react-router-dom';


const TableRow = ({ title, creator, replies, likes }) => {
    return (
        <tr>
            <td><Link to="/log in">{title}</Link></td>
            <td>{creator}</td>
            <td>{replies}</td>
            <td>{likes}</td>
        </tr>
    )
}

export default TableRow;
