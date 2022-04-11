import React, { useState } from "react";
import { DeleteBook } from "../index";
import { DetailHover } from "../index";
import './style.css';

export const Book = ({id, title, subtitle, authors=["Unknown"], thumb}) => {
    const [ details, setDetails ] = useState(false);

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

    return (
        <section className="bookListing" onClick={handleClick}>
            {details && <DetailHover title={title} subtitle={subtitle} authors={authors} thumb={thumb} display={true}/>}
            <img className="bookThumb" src={thumb} alt={title}></img>
            <h2 className="bookTitle">{checkTitleLength()}</h2>
            <h3 className="bookSubtitle">{subtitle}</h3>
            <p>{authors.join(", ")}</p>
            <DeleteBook id={id}/>
        </section>
    )
}