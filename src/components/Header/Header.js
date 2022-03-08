import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";
import HeaderCartButton from "./HeaderCartButton";

const menu = ["Phone number: 0123456789", "email: 123sweetcakes@gmail.com"];
const Header = () => {
  return (
    <section>
      {menu.map((x) => (
        <div className='container-fluid ms-auto'>{x}</div>
      ))}
      <Navbar>
        <Navbar
          className='container-fluid'
          bg=''
          variant='dark'
          style={{
            textTransform: "uppercase",
            backgroundColor: "purple",
            color: "black",
          }}
        >
          <Container>
            <Navbar.Brand href='#home'>Cakes and More</Navbar.Brand>
            <Nav className='ms-auto'>
              <Nav.Link href='#home' style={{ marginRight: "30px" }}>
                Home
              </Nav.Link>
              <Nav.Link href='#about-us' style={{ marginRight: "30px" }}>
                About us
              </Nav.Link>
              <Nav.Link href='#mycart' style={{ marginRight: "30px" }}>
                <HeaderCartButton />
              </Nav.Link>
              <Nav.Link href='#contact' style={{ marginRight: "30px" }}>
                contact
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Navbar>
    </section>
  );
};

export default Header;
