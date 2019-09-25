import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      FoodList: this.props.food,
      filteredFoods: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

  handleSearch(event) {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({
      query: event.target.value
    });
  }
  handleSubmitSearch(event) {
    event.preventDefault();
    console.log(this.state.query);
    const filteredFoods = [...this.state.FoodList];
    filteredFoods.filter(food =>
      food.name.toLowerCase().includes(this.state.query.toLowerCase())
    );

    console.log(filteredFoods);
    this.setState({
      FoodList: filteredFoods
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.handleSubmitSearch}>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Search"
              value={this.state.query}
              onChange={this.handleSearch}
            />
            <Button type="submit" value="Submit">
              Search
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Search;
