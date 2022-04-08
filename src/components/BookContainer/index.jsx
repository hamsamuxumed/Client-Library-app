import React, { useState, useEffect } from 'react';
import { Book } from '../Book';
import axios from 'axios';

export const BookContainer = ({query="harry potter"}) => {
    const [ books, setBooks ] = useState([]);

    useEffect(() => {
        const fetchBooks = async() => {
            try {
                const results = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=`);
                setBooks(results.data.items);
            } catch(err) {
                console.log(err);
            }
        } 
        fetchBooks();
    },[query])

    const renderBooks = () => books.map((r, i) => <Book key={i} 
                                                        title={r.volumeInfo.title}
                                                        subtitle={r.volumeInfo.subtitle} 
                                                        authors={r.volumeInfo.authors}
                                                        thumb={r.volumeInfo.imageLinks.smallThumbnail}/>)

    return (
        <article>
            {renderBooks()}
        </article>
    )
}
