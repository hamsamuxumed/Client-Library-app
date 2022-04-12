import React, { useState, useEffect } from 'react';
import { Book } from '../Book';
import axios from 'axios';
import './style.css';
const host = "http://ec2-52-87-178-79.compute-1.amazonaws.com:3000/books";

export const BookContainer = ({query="The"}) => {

    const [ books, setBooks ] = useState([]);
    

    useEffect(() => {
        const fetchBooks = async() => {
            try {
                const results = await axios.get(`${host}/${query}`);
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
                                                        available={r.allowAnonLogging}
                                                        thumb = { r.imageLinks.smallThumbnail} />)

    return (
        <article className='bookDisplay'>
            {renderBooks()}
        </article>
    )
}
