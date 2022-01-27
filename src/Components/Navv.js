import React, { Component } from 'react'
import {Button, Navbar, Container, Nav, NavLink} from 'react-bootstrap';
export class Navv extends Component {
    render() {
        return (
            <Navbar className="mb-5" bg="dark" variant="dark" fixed="top">
                <Container fluid>
                <Nav className="ms-auto">
                        <NavLink href="/home">HOME</NavLink>
                        <NavLink href="/">REGISTRATION</NavLink>
                        <NavLink href="/login">LOGIN</NavLink>
                </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default Navv
