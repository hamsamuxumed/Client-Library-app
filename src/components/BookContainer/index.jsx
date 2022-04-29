import React, { useState, useEffect } from 'react';
import { Book } from '../Book';
import axios from 'axios';
import './style.css';

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
                                                        date={r.publishedDate}
                                                        reserved={r.reserved}
                                                        thumb={r.imageLinks ? r.imageLinks.smallThumbnail : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Book.svg/1200px-Book.svg.png' }
                                                        />)

    return (
        <article className='bookDisplay'>
            {renderBooks()}
        </article>
    )
}
