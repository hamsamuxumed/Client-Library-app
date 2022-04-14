import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BookForm.css";
import { v1 as uuidv1 } from "uuid";
const host = "http://localhost:3000";

export const CreateBookForm = () => {
  const [formData, setFormData] = useState({
    id: uuidv1(),
    title: "",
    description: "",
    authors: [],
    publish_date: "",
<<<<<<< HEAD
    imageLinks: {
      thumbnail: "http://books.google.com/books/content?id=URFbEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      smallThumbnail: "http://books.google.com/books/content?id=URFbEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    }
  });

  const handleAuthor = (e) => 
    setFormData((data) => ({ ...data, authors: [e.target.value]}));
=======
    imageLinks:{
      thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51598ZdtO1S._SX394_BO1,204,203,200_.jpg",
      smallThumbnail: "https://images-na.ssl-images-amazon.com/images/I/51598ZdtO1S._SX394_BO1,204,203,200_.jpg"
    }
  });

>>>>>>> 5d70b6c2c6d2a491a3626d2ac40792d02d22cb71

  const handleChange = (e) =>
    setFormData((data) => ({ ...data, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    try {
      console.log(formData)
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
                name="authors"
                value={formData.authors}
                onChange={handleAuthor}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid Author's name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="form-block">
              <Form.Label>Publish Date:</Form.Label>
              <Form.Control
                type="date"
                name="publish_date"
                value={formData.publish_date}
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
