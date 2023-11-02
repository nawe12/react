import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import SearchIconComponent from "../SearchIconComponent/SearchIconComponent";

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className="navItem" href="#">Lo de Betty</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "10%" }}
            navbarScroll
          >
            <Nav.Link className="navItem" href="#action1">Inicio</Nav.Link>
            <Nav.Link className="navItem" href="#action2">Contacto</Nav.Link>
            <Nav.Link className="navItem" href="#action3">Productos</Nav.Link>
            <NavDropdown className="navItem" title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">Helados</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Batidos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
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
