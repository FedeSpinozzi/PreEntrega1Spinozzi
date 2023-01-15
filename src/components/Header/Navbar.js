import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'



function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to="/">Big Shoes</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/tipo/deportivo">Deportivo</Link></Nav.Link>
            <Nav.Link><Link to="/tipo/elegante">Elegante</Link></Nav.Link>
            <NavDropdown title="Calzado" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/genero/masculino">Masculino</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/genero/femenino">
                Femenino</Link>
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

