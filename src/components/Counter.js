import React, { Component } from "react";
import { Button, FormControl } from "react-bootstrap";

export default class Counter extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      count: 0,
      text: "",
      time: new Date(),
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };
  componentDidMount() {
    console.log("component did mount");
    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    console.log("componet will un mount");
    clearInterval(this.timer);
  }
  componentDidUpdate() {
    console.log("did update");
  }
  render() {
    console.log("render");
    return (
      <div style={{ width: "30%", margin: "30px auto", padding: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button variant='success' onClick={this.increment}>
            +
          </Button>
          <p>{this.state.count}</p>
          <Button variant='danger' onClick={this.decrement}>
            -
          </Button>
        </div>
        <FormControl
          type='text'
          onChange={event => this.setState({ text: event.target.value })}
        />
        <br />
        <p>{this.state.text}</p>
        <br />
        <p>Time : {this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}
