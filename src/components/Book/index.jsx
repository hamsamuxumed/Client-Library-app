import React from "react";
import { DeleteBook } from "../index";

export const Book = ({id, title, subtitle, authors=["Unknown"], thumb}) => {
    return (
        <section>
            <img src={thumb} alt={title}></img>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{authors.join(", ")}</p>
            <DeleteBook id={id}/>
        </section>
    )
}