import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar expand="lg" style={{boxShadow: '10px 0px 8px 0px #888888', height: '80px'}}>
                <Navbar.Brand href="#home" style={{color: process.env.REACT_APP_BASE_COLOR, fontWeight: process.env.REACT_APP_FONT_WEIGHT, fontSize: '25px'}}>Naija Secretary</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/" style={{color: process.env.REACT_APP_BASE_COLOR, fontWeight: process.env.REACT_APP_FONT_WEIGHT}}>Home</Nav.Link>
                        <Nav.Link href="/register" style={{color: process.env.REACT_APP_BASE_COLOR, fontWeight: process.env.REACT_APP_FONT_WEIGHT}}>Contact Us</Nav.Link>
                        <Nav.Link href="/register" style={{color: process.env.REACT_APP_BASE_COLOR, fontWeight: process.env.REACT_APP_FONT_WEIGHT}}>Our Bond</Nav.Link>
                        <Nav.Link href="/register" style={{color: process.env.REACT_APP_BASE_COLOR, fontWeight: process.env.REACT_APP_FONT_WEIGHT}}>How it works</Nav.Link>
                        <Nav.Link href="/login" style={{color: process.env.REACT_APP_BASE_COLOR, fontWeight: process.env.REACT_APP_FONT_WEIGHT}}>Log In</Nav.Link>
                        <Nav.Link href="/register" style={{color: process.env.REACT_APP_BASE_COLOR, fontWeight: process.env.REACT_APP_FONT_WEIGHT, border: 'solid 0.5px', borderRadius: '5px', borderColor: process.env.REACT_APP_BASE_COLOR}}>Create a Free Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>      
            </Navbar>
        );
    }
}