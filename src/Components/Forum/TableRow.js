import React from 'react';
import { Link } from 'react-router-dom';


const TableRow = ({ title, creator, comments, likes,_id }) => {
    return (
        <tr>
            <td><Link to={`discussion/${_id}`}>{title}</Link></td>
            <td>{creator.username}</td>
            <td>{comments.length}</td>
            <td>{likes}</td>
        </tr>
    )
}

export default TableRow;
