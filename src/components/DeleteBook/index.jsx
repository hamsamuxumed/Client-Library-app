import React from "react";
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import './style.css';
const host = "http://ec2-52-87-178-79.compute-1.amazonaws.com:3000/books";


export const DeleteBook = ({id}) => {
    
    const handleClick = async () => {
        try {
            await axios.delete(`${host}/${id}`);
            window.location.reload();
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <button className="deleteButton" onClick={handleClick}><FaTrash /></button>
    )
}