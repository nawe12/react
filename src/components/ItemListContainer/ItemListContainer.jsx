import React from "react";
import { Card, CardBody, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemListContainer = ({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            style={{ width: "12rem", margin: 25, height: "auto" }}
          >
            <Link to={`/item/${product.id}`}>
              <Card.Img variant="top" src={product.thumbnail} />
            </Link>
            <Card.Body>
              <Card.Title style={{ fontSize: "0.8rem" }}>
                {product.title}
              </Card.Title>
              <Card.Text style={{ fontSize: "0.6rem" }}>
                {product.description}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainer;