import React, { useState } from 'react';
import { Book } from '../Book';
import axios from 'axios';
import './style.css';

export const UserCollection = () => {

    const currUser = `${localStorage.getItem('fname').toLowerCase()} ${localStorage.getItem('lname').toLowerCase()}`;

    const [ books, setBooks ] = useState([]);

    const fetchBooks = async() => {
        try {
            const results = await axios.get(`http://localhost:3000/books/reserved/${currUser}`);
            setBooks(results.data.Items);
        } catch(err) {
            console.log(err);
        }
    } 
    fetchBooks();


    const renderBooks = () => books.map((r, i) => <Book key={i} 
                                                        id={r.id}
                                                        title={r.title}
                                                        subtitle={r.subtitle} 
                                                        authors={r.authors}
                                                        date={r.publishedDate}
                                                        reserved={r.reserved}
                                                        thumb={r.imageLinks.smallThumbnail}/>)

    return (
        <article className='bookDisplay'>
            {renderBooks()}
        </article>
    )
}
