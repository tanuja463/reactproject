import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero-section">
      <Container fluid className="text-center hero-content p-0">
        <h1 className="hero-title">Welcome to HerbaSphere 🌿</h1>
        <p className="hero-subtitle">
          Discover the world of Fruits, Vegetables, Herbs & Medicinal Plants.
        </p>

        <Link to="/about">
          <Button variant="success" size="lg">
            Explore Categories
          </Button>
        </Link>
      </Container>
    </div>
  );
}

export default Home;