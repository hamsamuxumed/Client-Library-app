import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {CreateBookForm} from '../CreateBookForm'
import { SearchForm } from "../SearchForm";
import { BookContainer } from "../BookContainer";
import { Login } from "../Login";

export const NavBar = () => {

  const [ logged, setLogged ] = useState(false);

  useEffect(() => {

    const checkLogin = () => {
  
      if(localStorage.getItem('fname')){
        setLogged(true);
      }
      
    }
    checkLogin();
  },[])

  const formatName = () => {
    let foundName = localStorage.getItem('fname');
    return foundName[0].toUpperCase() + foundName.slice(1);
  }

  const logOut = () => {
    localStorage.removeItem('fname');
    localStorage.removeItem('token');
    setLogged(false);
  }

  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#26A69A" }}>
          <Container>
            { logged ? <Navbar.Brand href="#home">{`Library - Welcome ${formatName()}`}</Navbar.Brand> :  <Navbar.Brand href="#home">Library</Navbar.Brand>}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/CreateBookForm"}>
                  Add Book
                </Nav.Link>
                <Nav.Link as={Link} to={"/Collection"}>
                  Collection
                </Nav.Link>
                {!logged ? <Nav.Link as={Link} to={"/Login"}>
                  Login
                </Nav.Link> :
                <Nav.Link as={Link} onClick={logOut} to={"/Login"}>
                  Logout
                </Nav.Link>
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<SearchForm />}/>
          <Route path="/CreateBookForm" element={<CreateBookForm/>}/>
          <Route path="/Collection" element={<BookContainer/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default NavBar;
