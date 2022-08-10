import React from "react";
import { Card, Container } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    //   <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={product.image} />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up
    //       the bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
    <Card
      style={{
        width: "20rem",
        height: "35rem",
        margin: "1rem",
        padding: "1rem",
      }}
    >
      <Link to={`/product/${product._id}`}>
        <Container>
          <Card.Img src={product.image} variant="top" />
        </Container>
      </Link>
      <Card.Body>
        {product.name.length > 50 ? (
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
        ) : (
          <>
            {" "}
            <Link to={`/product/${product._id}`}>
              <Card.Title as="div">
                <strong>{product.name}</strong>
              </Card.Title>
            </Link>
            <p>{product.description.slice(0, 70 - product.name.length)}...</p>
          </>
        )}

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
