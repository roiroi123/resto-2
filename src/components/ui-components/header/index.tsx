import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBarApp() {
    return (<Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Resto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {/* {Routes.filter((route: IRoute) => route.isVisible).map((route: IRoute) => {
                    const { path, name } = route;
                    return <Link to={path}> {name} </Link>
                })} */}
            </Nav>
        </Navbar.Collapse>
    </Navbar>)
}



