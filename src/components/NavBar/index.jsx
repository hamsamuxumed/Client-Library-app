import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {CreateBookForm} from '../CreateBookForm'

export const NavBar = () => {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Library</Navbar.Brand>
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
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          {/* <Route exact path="/" element={<Home/>}/> */}
          <Route path="/CreateBookForm" element={<CreateBookForm/>}/>
          {/* <Route path="/Collection" element={<Collection/>}/> */}
        </Routes>
      </div>
    </Router>
  );
};

export default NavBar;
