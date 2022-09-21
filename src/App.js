import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import Counter from "./components/Counter";

export default class App extends Component {
  state = {
    show: false,
  };
  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className='App'>
        <Button variant='secondary' onClick={this.toggleShow}>
          Show
        </Button>
        {this.state.show && <Counter />}
      </div>
    );
  }
}
