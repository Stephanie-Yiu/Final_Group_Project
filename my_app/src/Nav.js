import "./Nav.css";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MenuIcon from "@mui/icons-material/Menu";

function NavScrollExample() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  });

  function changeNav() {
    if (window.scrollY >= 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }

  return (
    <Navbar
      bg="black"
      expand="lg"
      style={{
        borderBottom: scrolling ? "#04b616 solid 2px" : "#000 solid 2px",
        transition: "all 0.5s ease-in-out",
      }}
      sticky="top"
      className="p-0"
    >
      <Container fluid className="px-3 px-md-5">
        <Navbar.Brand href="#" id="logo" className="fs-3">
          {"< FEWD / >"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          {" "}
          <MenuIcon style={{ color: "#04b616" }} />{" "}
        </Navbar.Toggle>
        <Navbar.Collapse className="text-center">
          <Nav className="m-auto my-2 my-lg-0 text-center">
            <Nav.Link href="#action1" className="text-light mx-5 my-2 my-md-0">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="text-light mx-5 my-2 my-md-0">
              Posts
            </Nav.Link>
            <Nav.Link href="#action2" className="text-light mx-5 my-2 my-md-0">
              Games
            </Nav.Link>
            <Nav.Link href="#action2" className="text-light mx-5 my-2 my-md-0">
              About
            </Nav.Link>
          </Nav>
          <Button id="login" className="my-3 my-lg-0 fw-bolder">
            LogIn
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
