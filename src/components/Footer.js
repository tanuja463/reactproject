import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center text-md-start g-2">
          
          {/* Brand Section */}
          <Col md={4}>
            <h6 className="footer-title">HerbaSphere 🌿</h6>
            <p>
              Discover fruits, vegetables, herbs and medicinal plants 
              from around the world.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li>Home</li>
              <li>Categories</li>
              <li>Favorites</li>
              <li>About</li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={4}>
            <h6 className="footer-heading">Contact</h6>
            <p>Email: support@herbasphere.com</p>
            <p>India 🌏</p>
          </Col>

        </Row>

        <hr className="my-2" />

        <div className="text-center footer-bottom">
          © {new Date().getFullYear()} HerbaSphere. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;