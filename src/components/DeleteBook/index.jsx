import React, { useState, useEffect } from "react";
import axios from 'axios';

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
        <button onClick={handleClick}>X</button>
    )
}