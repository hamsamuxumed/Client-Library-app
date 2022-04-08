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
        <h1>Warking sir</h1>

        <form action=""
            onChange={handleInput}

        >
            <BookContainer data={booksTitle}/>

        </form>
    </>
  )
}
