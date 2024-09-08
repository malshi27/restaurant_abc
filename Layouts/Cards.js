import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext"; // Use the useCart hook instead

function Cards({ image, rating, title, paragraph, price, renderRatingIcons }) {
  const { addToCart } = useCart(); // Get the addToCart function using the useCart hook

  const handleAddToCart = () => {
    const item = { id: Date.now(), title, price, image }; // Use a unique id for the item
    addToCart(item); // Add item to cart
  };

  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">Rs. {price}</h5>
            </div>
            <div className="add_to_card">
              <Link to="#" onClick={handleAddToCart}> {/* Add onClick event */}
                <i className="bi bi-bag me-2"></i>
                Add To Cart
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;
