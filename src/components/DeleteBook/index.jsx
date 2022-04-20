import React from "react";
import { FaTrash } from 'react-icons/fa';
import './style.css';


export const DeleteBook = ({id}) => {
    
    const handleClick = async () => {
        try {
            await fetch(`http://localhost:3000/books/${id}`,{
                method: "DELETE",
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            });
            window.location.reload();
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <button className="deleteButton" onClick={handleClick}><FaTrash /></button>
    )
}