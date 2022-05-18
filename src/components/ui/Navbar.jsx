import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';

export const Navbarmain = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand><b>Dioses</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/egipcios" className="nav-item nav-link">Egipcios</NavLink>
            <NavLink to="/nordicos" className="nav-item nav-link">Nordicos</NavLink>
            <NavLink to="/griegos" className="nav-item nav-link">Griegos</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
