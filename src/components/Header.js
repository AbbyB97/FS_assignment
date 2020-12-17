import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Logo from "./widgets/Logo";

const Header = () => {
  return (
    <div style={{margin:"1.5rem",marginTop:"0",marginBottom:"0"}}>
      <Navbar collapseOnSelect expand={false} bg="white" variant="light">
        <Navbar.Brand href="#home">
          <Logo/>
        </Navbar.Brand>
        <Nav  variant="pills" defaultActiveKey="link-1">
          <Nav.Item>
          <Nav.Link eventKey="link-1">Jobs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Get Social </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">James Keem </Nav.Link>
          </Nav.Item>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{ textAlign: "right",color:"black",marginRight:"1rem" }} href="#features">
              Features
            </Nav.Link>
            <Nav.Link style={{ textAlign: "right",color:"black" ,marginRight:"1rem"}} href="#pricing">
              Pricing
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
