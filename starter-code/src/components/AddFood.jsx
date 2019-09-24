// components/dynamicListsDemo/AddMovie.js

import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

class AddFoods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: 0,
      image: "",
      quantity: 0
    };
  }

  render() {
    return (
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Name of Food:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter food"
              value={this.state.name}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Calories</Form.Label>
            <Form.Control
              type="number"
              placeholder="calories"
              value={this.state.calories}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>image</Form.Label>
            <Form.Control
              type="text"
              placeholder="imageurl"
              value={this.state.image}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="quantity"
              value={this.state.quantity}
            />
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default AddFoods;
