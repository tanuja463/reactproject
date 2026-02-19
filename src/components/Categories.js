import { Card, Button, Row, Col, Container } from "react-bootstrap";
import medicinalImg from "../assets/medicinal-plants.jpg";

function Categories() {
    const categories = [
        {
            title: "🍎 Fruits",
            image:
                "https://images.unsplash.com/photo-1610832958506-aa56368176cf",
            description: "Common, Tropical, Berries & Exotic Fruits Worldwide",
        },
        {
            title: "🥕 Vegetables",
            image:
                "https://images.unsplash.com/photo-1540420773420-3366772f4999",
            description: "Root, Bulb, Fruiting & Cruciferous Vegetables",
        },
        {
            title: "🥬 Leafy Vegetables",
            image:
                "https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg",
            description: "Spinach, Methi, Lettuce, Moringa & More",
        },
        {
            title: "🌿 Culinary Herbs",
            image:
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
            description: "Basil, Rosemary, Oregano, Mint & More",
        },
        {
            title: "🌱 Medicinal Plants",
            image: medicinalImg,
            description: "Ayurvedic & Traditional Healing Plants",
        },
        {
            title: "🌾 Grains & Cereals",
            image:
                "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
            description: "Wheat, Rice, Barley, Oats & Millets",
        },
        {
            title: "🥜 Nuts & Seeds",
            image:
                "https://images.unsplash.com/photo-1589872265507-3532da523776?q=80&w=1080&auto=format&fit=crop",
            description: "Almonds, Walnuts, Chia, Flax & More",
        },
        {
            title: "🌶 Spices",
            image:
                "https://images.unsplash.com/photo-1596040033229-a9821ebd058d",
            description: "Turmeric, Pepper, Cardamom, Clove & More",
        },
        {
            title: "🍄 Mushrooms",
            image:
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
            description: "Edible & Medicinal Mushroom Varieties",
        },
        {
            title: "🌴 Tropical Plants",
            image:
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
            description: "Banana, Coconut, Papaya & Exotic Plants",
        },
        {
            title: "🌻 Flowers",
            image:
                "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
            description: "Edible & Medicinal Flower Varieties",
        },
        {
            title: "🌳 Trees",
            image:
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            description: "Fruit Trees, Herbal Trees & Forest Species",
        },
    ];

    return (
        <div className="category-section">
            <Container>
                <h2 className="text-center mb-5">
                    Explore Our Categories 🌿
                </h2>

                <Row className="g-4 justify-content-center">
                    {categories.map((cat, index) => (
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <Card className="category-card h-100">
                                <Card.Img
                                    variant="top"
                                    src={cat.image}
                                    className="category-img"
                                />
                                <Card.Body>
                                    <Card.Title>{cat.title}</Card.Title>
                                    <Card.Text>{cat.description}</Card.Text>
                                    <Button variant="success">Explore</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Categories;