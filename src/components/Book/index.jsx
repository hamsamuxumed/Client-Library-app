import React, { useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';
import { DeleteBook } from "../index";
import { DetailHover } from "../index";
import './style.css';

export const Book = ({id, title, subtitle, authors=["Unknown"], date, reserved, thumb}) => {
    const [ details, setDetails ] = useState(false);
    const [ role, setRole ] = useState(false);

    const checkTitleLength = () => {
        if(title.length > 50){
            return title.substring(0,51) + '...';
        } else {
            return title;
        }
    }

    const handleClick = () => {
        setDetails(() => !details);
    }

    useEffect(() => {
        const checkRole = () => {
            const decodedToken = jwt_decode(localStorage.getItem('token'));
            decodedToken.role === 'librarian' && setRole(true);
        }
    
        checkRole();
    },[])

    return (
        <section className="bookListing" onClick={handleClick}>
            {details && <DetailHover id={id} title={title} subtitle={subtitle} date={date} reserved={reserved} authors={authors} thumb={thumb} display={true}/>}
            <img className="bookThumb" src={thumb} alt={title}></img>
            <h2 className="bookTitle">{checkTitleLength()}</h2>
            <h3 className="bookSubtitle">{subtitle}</h3>
            <p>{authors.join(", ")}</p>
            { role && <DeleteBook id={id}/>}
        </section>
    )
}