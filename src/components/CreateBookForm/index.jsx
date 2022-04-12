import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BookForm.css";
import { v1 as uuidv1 } from "uuid";
const host = "http://ec2-52-87-178-79.compute-1.amazonaws.com:3000";

export const CreateBookForm = () => {
  const [formData, setFormData] = useState({
    id: uuidv1(),
    title: "",
    description: "",
    author: "",
    publishedDate: "",
    imageLinks:{
      thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51598ZdtO1S._SX394_BO1,204,203,200_.jpg",
      smallThumbnail: "https://images-na.ssl-images-amazon.com/images/I/51598ZdtO1S._SX394_BO1,204,203,200_.jpg"
    }
  });


  const handleChange = (e) =>
    setFormData((data) => ({ ...data, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
        body: JSON.stringify(formData),
      };
      await fetch(`${host}/Books`, options);
  
      window.location.href='http://localhost:8080'
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="heading p-5">
      <h2>
        Please enter the details of the book
      </h2>
      <div className="d-flex align-items-center justify-content-center text-center p-2 ">
        <Form
          className="book-form"
          id = "book-form"
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div className="form-fields-container d-flex flex-column justify-content-start align-center m-2">
            <Form.Group className="form-block" >
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                minLength="5"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid title.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="form-block">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                minLength="5"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid description.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="form-block">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
            
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid Author's name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="form-block">
              <Form.Label>Publish Date:</Form.Label>
              <Form.Control
                type="date"
                name="publishedDate"
                value={formData.publishedDate}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid date.
              </Form.Control.Feedback>
            </Form.Group>

            <div className="form-button d-flex align-items-center justify-content-center text-center p-2">
              <input
                className="submit-button btn btn-secondary "
                type="submit"
                value="Submit"
                style={{ backgroundColor: "#26A69A",width:"120px",height:"40px" }}
                
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateBookForm;
