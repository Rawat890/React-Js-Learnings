import React, { Component } from "react";

class GetDerivedStateFromProps extends React.Component {
  constructor(props) {
    super(props);
    console.log("I am Constructor");
  }

  state = {
    points: 10,
  };

  static getDerivedStateFromProps(/* props, state*/) {
    return {
      points: 2000,
    };
  }

  render() {
    return (
      <>
        <p>
          static getDerivedStateFromProps is a new React lifecycle method as of
          React 17 designed to replace componentWillReceiveProps. Its main
          function is to ensure that the state and props are in sync for when
          it’s required.
        </p>
        <br />
        <h3>You scored - {this.state.points}</h3>
      </>
    );
  }
}

export default GetDerivedStateFromProps;
