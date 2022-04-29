import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export const BookReservations = () => {

    const [ books, setBooks ] = useState([]);

    useEffect(() => {
        const fetchBooks = async() => {
            try {
                const results = await axios.get(`http://localhost:3000/reserved`);
                setBooks(results.data.Items);
            } catch(err) {
                console.log(err);
            }
        } 
        fetchBooks();
    },[!books])



    const renderBooks = () => books.map((r, i) => 
        <tr key={i}>
            <td><img src={r.imageLinks ? r.imageLinks.smallThumbnail : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Book.svg/1200px-Book.svg.png' } alt="Book cover"></img></td>
            <td>{r.title}</td>
            <td>{r.authors ? r.authors.join(", ") : "Unknown"}</td>
            <td>{r.publishedDate}</td>
            <td>{r.reserved_by}</td>
            <td>{r.due_date}</td>
        </tr>)

    return (
        <article>
            <table className='reserveTable'>
                <thead className='reserveTableHeader'>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Author(s)</th>
                        <th>Published</th>
                        <th>Reserved By</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {renderBooks()}
                </tbody>
            </table>
        </article>
    )
}
