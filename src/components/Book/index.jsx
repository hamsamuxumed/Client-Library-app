import React from "react";
import { DeleteBook } from "../index";
import './style.css';

export const Book = ({id, title, subtitle, authors=["Unknown"], thumb}) => {
    return (
        <section className="bookListing">
            <img src={thumb} alt={title}></img>
            <h2 className="bookTitle">{title}</h2>
            <h3 className="bookSubtitle">{subtitle}</h3>
            <p>{authors.join(", ")}</p>
            <DeleteBook id={id}/>
        </section>
    )
}