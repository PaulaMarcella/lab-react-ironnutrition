import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import foods from "./foods.json";
import "./components/FoodBox";
import FoodBox from "./components/FoodBox";
import Container from "react-bootstrap/Container";

import AddFood from "./components/AddFood";

import "./App.css";
import Button from "react-bootstrap/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Iron Nutrition</h2>

        <Button>Add Product</Button>

        <AddFood />

        {/* <Container>
          <Form>
            <Form.Group>
              <Form.Label>Name of Food:</Form.Label>
              <Form.Control type="text" placeholder="Enter food" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Calories</Form.Label>
              <Form.Control type="number" placeholder="calories" />
            </Form.Group>

            <Form.Group>
              <Form.Label>image</Form.Label>
              <Form.Control type="text" placeholder="imageurl" />
            </Form.Group>
          </Form>
        </Container> */}

        <Container>
          {foods.map(food => (
            <FoodBox foods={food} />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
