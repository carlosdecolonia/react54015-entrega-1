import {Navbar, Container, Nav} from "react-bootstrap";
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
   // <>
      <Navbar bg="light" data-bs-theme="light" fixed="top">
        <Container>
        <Navbar.Brand href="#home">
          <img src="src/assets/logo_react.jpg" alt="Logo mi Tienda"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Todos</Nav.Link>
            <Nav.Link href="#hardware">Hardware</Nav.Link>
            <Nav.Link href="#software">Software</Nav.Link>
            <Nav.Link href="#accesorios">Accesorios</Nav.Link>
            <Nav.Link href="#outlet" id="outlet">Outlet</Nav.Link>

          </Nav>
          <Nav className="ml-auto">
              <Nav.Link href="#shopping-cart"> <CartWidget /> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   // </>
  );
}

export default NavBar;