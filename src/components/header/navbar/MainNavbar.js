import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import myLogo from "../../../assets/imgLogo/myPhoto.png";

import "./MainNavbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MainNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="#121212"
      variant="dark"
      className="navbar-design-border"
    >
      <Container>
        <Navbar.Brand href="#home">
          <div className="logo-wraper">
            <img src={myLogo} className="my-logo" alt="my old logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className="link-text">
              <p className="h3">home</p>
            </Link>
            <Link to="/blog" className="link-text">
              <p className="h3">blog</p>
            </Link>
            <Link to="/about" className="link-text">
              <p className="h3">about</p>
            </Link>
            <Link to="/projects" className="link-text">
              <p className="h3">projects</p>
            </Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="/home">
              <p className="my-middle-name">Maglovski</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
