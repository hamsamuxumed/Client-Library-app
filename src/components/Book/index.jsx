import React from "react";
import { DeleteBook } from "../index";
import './style.css';

export const Book = ({id, title, subtitle, authors=["Unknown"], thumb}) => {

    const checkTitleLength = () => {
        if(title.length > 50){
            return title.substring(0,51) + '...';
        } else {
            return title;
        }
    }

    return (
        <section className="bookListing">
            <img className="bookThumb" src={thumb} alt={title}></img>
            <h2 className="bookTitle">{checkTitleLength()}</h2>
            <h3 className="bookSubtitle">{subtitle}</h3>
            <p>{authors.join(", ")}</p>
            <DeleteBook id={id}/>
        </section>
    )
}