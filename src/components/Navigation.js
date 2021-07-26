import React from "react";
import { Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  return (
    <>
      <Navbar id="nav" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo512.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Resume Builder
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Navigation;
