import React, {useState} from 'react'


export const SearchForm = () => {

    const [booksTitle, setBooksTitle] = useState('');
    const [formData, setFormData] = useState('');


    const handleInput = e => {
        setInput(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        setBooksTitle(setInput)


    }

  return (

    <>
        <h1>Warking sir</h1>

        <form action="">

        </form>
    </>
  )
}
