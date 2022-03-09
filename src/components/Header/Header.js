import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Container from "react-bootstrap/Container";
import HeaderCartButton from "./HeaderCartButton";

const menu = ["Phone number: 0123456789", "email: 123sweetcakes@gmail.com"];
const Header = (props) => {
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
            <Row>
              <Col>Cakes</Col>
              <Col className='justify-contend-end'>
                <HeaderCartButton onClick={props.onShowCart} />
              </Col>
            </Row>

            {/* <Navbar.Brand href='#home'>Cakes</Navbar.Brand>
            <Nav className='ms-auto'>
              <Nav.Link href='#home' style={{ marginRight: "30px" }}>
                Home
              </Nav.Link>
              <Nav.Link href='#about-us' style={{ marginRight: "30px" }}>
                About us
              </Nav.Link>
              <Nav.Link
                href='#mycart'
                style={{ marginRight: "30px" }}
              ></Nav.Link>
              <Nav.Link href='#contact' style={{ marginRight: "30px" }}>
                contact
              </Nav.Link>
            </Nav> */}
          </Container>
        </Navbar>
      </Navbar>
    </section>
  );
};

export default Header;
