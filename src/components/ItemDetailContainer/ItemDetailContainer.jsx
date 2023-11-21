import React from "react";
import { Card } from "react-bootstrap";

const ItemDetailContainer = ({ product }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Card
        key={product.id}
        style={{ width: "18rem", margin: 10, height: "fit-content" }}
      >
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetailContainer;