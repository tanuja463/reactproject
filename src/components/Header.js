import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="success" variant="dark" expand="lg" className="py-1">
      <Container>
        <Navbar.Brand as={Link} to="/">
          HerbaSphere 🌿
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/categories">Categories</Nav.Link>  {/* ✅ Added */}
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;