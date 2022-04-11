import React, {useState} from 'react'
import { BookContainer } from '..';
import './style.css'


export const SearchForm = () => {

    const [booksTitle, setBooksTitle] = useState('');
    const [formData, setFormData] = useState('');


    const handleInput = e => {
        setFormData(e.target.value);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        setBooksTitle(formData);
        setFormData('');
    }

  return (

    <>
        

        <form action=""
            onSubmit={handleFormSubmit}
            id="searchForm"
        >
            <input 
                type="text" 
                onChange={handleInput}
                name="booksTitle" 
                id="booksTitle" 
                value={formData}
                placeholder="Search for books"
            />
            <button
                type="submit"
                id="SubmitButton"
            >
                Search
            </button>

        
        </form>
        <BookContainer query={booksTitle}/>
    </>
  )
}
