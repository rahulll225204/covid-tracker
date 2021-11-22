import React from "react";
import '../styles/Navb.css';
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
const Navb = () => {
  return (
    <>
      <Navbar className="color" sticky="top" bg="light" expand="lg">
        <Container className="color" fluid>
          <Navbar.Brand className="color" href="#"><h2 id="logo">COVID TRACKER</h2></Navbar.Brand>
          <Navbar.Toggle className="color" aria-controls="navbarScroll" />
          <Navbar.Collapse className="color" id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 color"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="Home">Home</Nav.Link>
              <Nav.Link href="About">About</Nav.Link>
              <Nav.Link href="Service">Service</Nav.Link>
              <Nav.Link href="Contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex color">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}
export default Navb;