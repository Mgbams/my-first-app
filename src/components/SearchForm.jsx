import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class SearchForm extends Component {
  state = {
    search: "",
    redirect: false,
  };

  handleChange = (event) => {
    const search = event.target.value;
    this.setState({ search });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ redirect: true });
  };
  render = () => {
    const { search, redirect } = this.state;
    // Working on redirection

    if (redirect) {
      return <Redirect to={`/search/${search}`} />;
    }

    return (
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={this.handleChange}
          value={search}
          onSubmit={this.handleSubmit}
        />
        <Button type="submit" variant="outline-success">
          Search
        </Button>
      </Form>
    );
  };
}

export default SearchForm;
