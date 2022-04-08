import React, {useState} from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './BookForm.css'
const host = "http://localhost:3000"


export const CreateBookForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        author: "",
        publish_date: ""
    })

    const handleChange = e => setFormData(data => ({ ...data, [e.target.name]: e.target.value }))

    const onSubmit= async (e) =>{
        try{
             e.preventDefault()
             const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                 },
                 mode: 'cors',
                 body: JSON.stringify(formData)
        }
        await fetch(`${host}/Books`, options)
       

    } catch (err) {
        console.log(err)
    }
    } 
  return (
    <div>
      <Form className="book-form" onSubmit={(e) => { onSubmit(e)}}>
                <div className="form-fields-container d-flex flex-column justify-content-start align-center">
                    <Form.Group className="form-block">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} required minLength="5"/>
                        <Form.Control.Feedback type="invalid">
                        Please enter a valid title.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="form-block">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} required minLength="5"/>
                        <Form.Control.Feedback type="invalid">
                        Please enter a valid description.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="form-block">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" name="author" value={formData.author} onChange={handleChange} required />
                        <Form.Control.Feedback type="invalid">
                        Please enter a valid Author's name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="form-block">
                        <Form.Label>Publish Date:</Form.Label>
                        <Form.Control type="date" name="publish_date" value={formData.publish_date} onChange={handleChange}/>
                        <Form.Control.Feedback type="invalid">
                        Please enter a valid date.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <div className="form-button">
                        <input className="submit-button btn btn-secondary" type="submit" value="Submit" />
                    </div>

                </div> 
             </Form>
    </div>
  );
};

export default CreateBookForm;
