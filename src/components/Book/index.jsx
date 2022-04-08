import React from "react";

export const Book = ({title, subtitle, authors, thumb}) => {
    

    return (
        <section>
            <img src={thumb} alt={title}></img>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{authors.join(", ")}</p>
        </section>
    )
}