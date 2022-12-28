import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import CartWidget from './CartWidget';



function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Big Shoes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Deportivo</Nav.Link>
            <Nav.Link href="#link">Elegante</Nav.Link>
            <NavDropdown title="Calzado" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Masculino</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Femenino
              </NavDropdown.Item>              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Talles epeciales
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>     
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

