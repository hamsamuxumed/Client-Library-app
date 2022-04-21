import React from "react";
import axios from 'axios';
import './style.css';

export const ReserveButton = ({id}) => {

    const handleClick = async() => {
        try {
            await axios.patch(`http://localhost:3000/books/${id}`, {
                reserved: true,
                reserved_by: `${localStorage.getItem('fname')} ${localStorage.getItem('lname')}`
            });
            window.location.reload();
        } catch(err) {
            console.log(err);
        }
    } 
        

    return (
        <div className="reserveBtnContainer">
            <button className="reserveButton" onClick={handleClick}>Reserve this title</button>
        </div>
    )
}