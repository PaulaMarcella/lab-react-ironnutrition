// components/dynamicListsDemo/AddMovie.js

import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class AddFoods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: 0,
      image: "",
      quantity: 0
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCaloriesChange = this.handleCaloriesChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  handleCaloriesChange(event) {
    this.setState({
      calories: event.target.valueAsNumber
    });
  }
  handleImageChange(event) {
    this.setState({
      image: event.target.value
    });
  }
  handleQuantityChange(event) {
    this.setState({
      quantity: event.target.valueAsNumber
    });
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleAddFood}>
          <Form.Group>
            <Form.Label>Name of Food:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter food"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Calories</Form.Label>
            <Form.Control
              type="number"
              placeholder="calories"
              value={this.state.calories}
              onChange={this.handleCaloriesChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Image:</Form.Label>
            <Form.Control
              type="text"
              placeholder="imageurl"
              value={this.state.image}
              onChange={this.handleImageChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Quantity:</Form.Label>
            <Form.Control
              type="number"
              placeholder="quantity"
              value={this.state.quantity}
              onChange={this.handleQuantityChange}
            />
          </Form.Group>
          <Button value="Submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default AddFoods;
