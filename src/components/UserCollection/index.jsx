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

    const checkDate = (dueDate) => {
        let today = new Date();
        let currDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        console.log(dueDate)
        console.log(currDate.toDateString())

        if(currDate.toDateString() === dueDate){
            return <span className='dueToday'>TODAY</span>
        } else {
            return dueDate;
        }
    }

    const renderBooks = () => books.map((r, i) => 
    <div key={i}>
        <Book 
              id={r.id}
              title={r.title}
              subtitle={r.subtitle} 
              authors={r.authors}
              date={r.publishedDate}
              reserved={r.reserved}
              thumb={r.imageLinks.smallThumbnail}
        />
        <p className='bookDue'>Due: {checkDate(r.due_date)}</p>
    </div>)

    return (
        <article className='bookDisplay'>
            {renderBooks()}
        </article>
    )
}
