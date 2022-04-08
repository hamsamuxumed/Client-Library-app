import React, { useState, useEffect } from 'react';
import { Book } from '../Book';
import axios from 'axios';

export const BookContainer = ({query="Flowers"}) => {
    const [ books, setBooks ] = useState([]);

    useEffect(() => {
        const fetchBooks = async() => {
            try {
                const results = await axios.get(`http://localhost:3000/books/${query}`);
                console.log(results.data.Items);
                setBooks(results.data.Items);
            } catch(err) {
                console.log(err);
            }
        } 
        fetchBooks();
    },[query])

    const renderBooks = () => books.map((r, i) => <Book key={i} 
                                                        title={r.title}
                                                        subtitle={r.subtitle} 
                                                        authors={r.authors}
                                                        thumb={r.imageLinks.smallThumbnail}/>)

    return (
        <article>
            {renderBooks()}
        </article>
    )
}