import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class FoodBox extends Component {
  render() {
    const foods = this.props.foods;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={foods.image} />
          <Card.Body>
            <Card.Title>{foods.name}</Card.Title>
            <Card.Text>{foods.calories}</Card.Text>
            <Card.Text>{foods.quantity}</Card.Text>
            <Button variant="primary">Add</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default FoodBox;
