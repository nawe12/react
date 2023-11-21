import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import SearchIconComponent from "../SearchIconComponent/SearchIconComponent";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const NavBarComponent = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand
          className="navItem"
          style={{ fontSize: "0.8rem" }}
        >
          <Link
            to={"/"}
            style={{ textDecoration: "none", color: "darkslategray" }}
          >
            Tienda Betty
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ fontSize: "0.6rem" }}
            navbarScroll
          >
            <Nav.Link
              className="navItem"
              style={{ fontSize: "0.6rem", color: "darkslategray" }}
            >
              Contacto
            </Nav.Link>

            <NavDropdown
              className="navItem"
              title="Categorías"
              id="navbarScrollingDropdown"
            >
              {categories.map((category, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link
                      to={`/category/${category}`}
                      style={{
                        textDecoration: "none",
                        fontSize: "0.4rem",
                        color: "darkslategray",
                      }}
                    >
                      {category}
                    </Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
          <Form className="d-flex" style={{ paddingRight: "25px" }}>
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
              style={{ fontSize: "0.6rem" }}
            />
            <Button
              variant="outline-success"
              style={{
                fontSize: "0.6rem",
                color: "white",
                backgroundColor: "royalblue",
              }}
            >
              <SearchIconComponent />
            </Button>
          </Form>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
