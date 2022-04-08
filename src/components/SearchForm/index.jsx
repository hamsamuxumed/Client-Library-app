import React, {useState} from 'react'
import { BookContainer } from '..';


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
            id="SearchForm"
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
        <BookContainer data={booksTitle}/>
    </>
  )
}
