import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      newFoods: [],
      filteredFoods: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

  handleSearch(event) {
    console.log(event.target.value);
    this.setState({
      query: event.target.value
    });
  }
  handleSubmitSearch(event) {
    console.log(event);
    this.setState({});
  }

  render() {
    return (
      <div>
        <Container>
          <Form>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Search"
              onChange={this.handleSearch}
              value={this.state.query}
              onSubmit={this.handleSubmitSearch}
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
