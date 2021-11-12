import React from 'react';
import './Header.css';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Nav.Link as = {Link} to="/">
                    <img src={logo} alt="" />
                </Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                    <Nav.Link as = {Link} to="/">Home</Nav.Link>
                        <Nav.Link as = {Link} to="/product">Product</Nav.Link>
                        {user?.email?
                            <Nav.Link as = {Link} to="/dashboard">Dashboard</Nav.Link>:
                            ''
                        }
                        {user?.email?
                            <Nav.Item>
                                <Button className="logout-btn" onClick={logOut}>Logout</Button>
                            </Nav.Item>:
                            <Nav.Item>
                                <Nav.Link as = {Link} to="/login">Login</Nav.Link>
                            </Nav.Item>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    );
};

export default Header;