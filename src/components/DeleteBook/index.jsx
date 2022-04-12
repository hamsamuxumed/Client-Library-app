import React from "react";
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import './style.css';


export const DeleteBook = ({id}) => {
    
    const handleClick = async () => {
        try {
            await axios.delete(`http://localhost:3000/books/${id}`);
            window.location.reload();
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <button className="deleteButton" onClick={handleClick}><FaTrash /></button>
    )
}