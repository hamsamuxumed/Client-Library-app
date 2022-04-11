import React, { useState, useEffect } from 'react';
import { Book } from '../Book';
import axios from 'axios';

export const BookContainer = ({query="The"}) => {
    const [ books, setBooks ] = useState([]);

    useEffect(() => {
        const fetchBooks = async() => {
            try {
                const results = await axios.get(`http://localhost:3000/books/${query}`);
                setBooks(results.data.Items);
            } catch(err) {
                console.log(err);
            }
        } 
        fetchBooks();
    },[query])

    const renderBooks = () => books.map((r, i) => <Book key={i} 
                                                        id={r.id}
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
