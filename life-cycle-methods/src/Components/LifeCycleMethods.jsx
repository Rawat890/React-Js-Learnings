import React, { Component } from "react";
import ComponentUnmount from "./ComponentUnmount";

class LifeCycleMethods extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentDidUpdate() {
    console.log("After Each render ComponentDidUpdate Called");
  }

  render() {
    console.log("Render method is called");
    return (
      <>
        <h2>Life Cycle Methods of Components</h2>
        <h3
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Counter value - {this.state.counter}
        </h3>

        <button
          onClick={() => {
            this.setState({ counter: this.state.counter - 1 });
          }}
        >
          Decrement Counter
        </button>

        {this.state.counter > 5 ? <ComponentUnmount /> : null}
      </>
    );
  }
}

export default LifeCycleMethods;
