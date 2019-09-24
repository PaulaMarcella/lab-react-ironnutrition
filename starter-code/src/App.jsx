import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import foods from "./foods.json";
import "./components/FoodBox";
import FoodBox from "./components/FoodBox";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import AddFood from "./components/AddFood";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: 0,
      image: "",
      quantity: 0,

      newFoods: []
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCaloriesChange = this.handleCaloriesChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleSubmitFood = this.handleSubmitFood.bind(this);
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
  handleSubmitFood(event) {
    console.log("button clicked");
    console.log(event.target);
    console.log(this.state.name);
    console.log(this.state);
    const newArray = [...this.state.newFoods];
    console.log(newArray);
    newArray.push({
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: this.state.quantity
    });
    console.log(newArray);
    this.setState({
      newFoods: newArray
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <h2>Iron Nutrition</h2>

        {/* <AddFood /> */}

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
            <Button onClick={this.handleSubmitFood} value="Submit">
              Submit
            </Button>
          </Form>
        </Container>

        <Container>
          {this.state.newFoods.map(food => (
            <FoodBox foods={food} />
          ))}

          {foods.map(food => (
            <FoodBox foods={food} />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
